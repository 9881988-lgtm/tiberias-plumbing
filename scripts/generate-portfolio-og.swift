#!/usr/bin/env swift

import AppKit

let arguments = CommandLine.arguments
guard arguments.count == 3 else {
    fputs("Usage: generate-portfolio-og.swift <count> <output.png>\n", stderr)
    exit(1)
}

let count = arguments[1]
let outputURL = URL(fileURLWithPath: arguments[2])
let size = NSSize(width: 1200, height: 630)
let image = NSImage(size: size)

func color(_ hex: UInt32) -> NSColor {
    NSColor(
        red: CGFloat((hex >> 16) & 0xff) / 255,
        green: CGFloat((hex >> 8) & 0xff) / 255,
        blue: CGFloat(hex & 0xff) / 255,
        alpha: 1
    )
}

func drawText(_ text: String, x: CGFloat, y: CGFloat, size: CGFloat, weight: NSFont.Weight, color textColor: NSColor) {
    let attributes: [NSAttributedString.Key: Any] = [
        .font: NSFont.systemFont(ofSize: size, weight: weight),
        .foregroundColor: textColor
    ]
    text.draw(at: NSPoint(x: x, y: y), withAttributes: attributes)
}

image.lockFocus()
color(0x102731).setFill()
NSBezierPath(rect: NSRect(origin: .zero, size: size)).fill()

color(0xf4f9fb).setFill()
NSBezierPath(roundedRect: NSRect(x: 60, y: 52, width: 720, height: 526), xRadius: 18, yRadius: 18).fill()

drawText("STRUCTOR ROBOTICS", x: 104, y: 503, size: 29, weight: .bold, color: color(0x0f91a8))
drawText(count, x: 100, y: 234, size: 150, weight: .heavy, color: color(0x061822))
drawText("published", x: 535, y: 326, size: 40, weight: .bold, color: color(0x061822))
drawText("Verified App Store portfolio", x: 104, y: 170, size: 34, weight: .bold, color: color(0x061822))
drawText("iPhone | iPad | Mac", x: 104, y: 112, size: 24, weight: .medium, color: color(0x566269))

let tileColors: [NSColor] = [
    color(0x5baaf0), color(0x80c86d), color(0xde70b4),
    color(0xff625e), color(0x13a7b5), color(0xffc343)
]

for row in 0..<4 {
    for column in 0..<3 {
        let x = CGFloat(850 + column * 92)
        let y = CGFloat(433 - row * 102)
        let rect = NSRect(x: x, y: y, width: 72, height: 72)
        tileColors[(row * 3 + column) % tileColors.count].setFill()
        NSBezierPath(roundedRect: rect, xRadius: 13, yRadius: 13).fill()

        color(0xfafafa).setFill()
        let inset = (row + column) % 3 == 0 ? CGFloat(13) : CGFloat(20)
        NSBezierPath(roundedRect: rect.insetBy(dx: inset, dy: inset), xRadius: 8, yRadius: 8).fill()
    }
}

image.unlockFocus()

guard let data = image.tiffRepresentation,
      let bitmap = NSBitmapImageRep(data: data),
      let png = bitmap.representation(using: .png, properties: [:]) else {
    fputs("Unable to render PNG\n", stderr)
    exit(1)
}

try png.write(to: outputURL)
