import AppKit
import CoreImage
import Foundation

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let appStoreURL = "https://apps.apple.com/il/app/receiptil/id6784747059"
let outputURL = root.appendingPathComponent("receiptil/assets/social/facebook-receiptil-4x5.png")

func color(_ hex: UInt32, alpha: CGFloat = 1) -> NSColor {
    NSColor(
        calibratedRed: CGFloat((hex >> 16) & 0xff) / 255,
        green: CGFloat((hex >> 8) & 0xff) / 255,
        blue: CGFloat(hex & 0xff) / 255,
        alpha: alpha
    )
}

func font(_ size: CGFloat, _ weight: NSFont.Weight) -> NSFont {
    NSFont.systemFont(ofSize: size, weight: weight)
}

func paragraph(_ align: NSTextAlignment = .left, lineHeight: CGFloat? = nil) -> NSMutableParagraphStyle {
    let style = NSMutableParagraphStyle()
    style.alignment = align
    style.lineBreakMode = .byWordWrapping
    if let lineHeight {
        style.minimumLineHeight = lineHeight
        style.maximumLineHeight = lineHeight
    }
    return style
}

func drawText(_ text: String, rect: CGRect, size: CGFloat, weight: NSFont.Weight, fill: NSColor, align: NSTextAlignment = .left, lineHeight: CGFloat? = nil) {
    let attrs: [NSAttributedString.Key: Any] = [
        .font: font(size, weight),
        .foregroundColor: fill,
        .paragraphStyle: paragraph(align, lineHeight: lineHeight)
    ]
    text.draw(with: rect, options: [.usesLineFragmentOrigin, .usesFontLeading], attributes: attrs)
}

func rounded(_ rect: CGRect, radius: CGFloat, fill: NSColor) {
    fill.setFill()
    NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius).fill()
}

func drawImageClipped(_ image: NSImage, rect: CGRect, radius: CGFloat) {
    NSGraphicsContext.saveGraphicsState()
    NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius).addClip()
    image.draw(in: rect, from: .zero, operation: .sourceOver, fraction: 1, respectFlipped: true, hints: nil)
    NSGraphicsContext.restoreGraphicsState()
}

func aspectFit(_ image: NSImage, in rect: CGRect) {
    let size = image.size
    let scale = min(rect.width / size.width, rect.height / size.height)
    let drawSize = CGSize(width: size.width * scale, height: size.height * scale)
    let drawRect = CGRect(x: rect.midX - drawSize.width / 2, y: rect.midY - drawSize.height / 2, width: drawSize.width, height: drawSize.height)
    image.draw(in: drawRect, from: .zero, operation: .sourceOver, fraction: 1, respectFlipped: true, hints: nil)
}

func makeQRCode(_ text: String, size: CGFloat) -> NSImage {
    let filter = CIFilter(name: "CIQRCodeGenerator")!
    filter.setValue(text.data(using: .utf8), forKey: "inputMessage")
    filter.setValue("M", forKey: "inputCorrectionLevel")
    let output = filter.outputImage!
    let scale = size / output.extent.width
    let transformed = output.transformed(by: CGAffineTransform(scaleX: scale, y: scale))
    let rep = NSCIImageRep(ciImage: transformed)
    let image = NSImage(size: NSSize(width: size, height: size))
    image.addRepresentation(rep)
    return image
}

let icon = NSImage(contentsOf: root.appendingPathComponent("receiptil/assets/icon.png"))!
let setup = NSImage(contentsOf: root.appendingPathComponent("receiptil/assets/setup.png"))!
let dashboard = NSImage(contentsOf: root.appendingPathComponent("receiptil/assets/dashboard.png"))!
let qr = makeQRCode(appStoreURL, size: 178)

let width = 1080
let height = 1350
let image = NSImage(size: NSSize(width: width, height: height))
image.lockFocusFlipped(true)

let canvas = CGRect(x: 0, y: 0, width: width, height: height)
NSGradient(colors: [color(0x071f42), color(0x0866ff), color(0xf5f8ff)])!.draw(in: canvas, angle: -90)

rounded(CGRect(x: 58, y: 58, width: 964, height: 1234), radius: 42, fill: color(0xffffff, alpha: 0.96))
rounded(CGRect(x: 58, y: 58, width: 964, height: 294), radius: 42, fill: color(0x071f42))

drawImageClipped(icon, rect: CGRect(x: 790, y: 92, width: 154, height: 154), radius: 34)
drawText("ReceiptIL", rect: CGRect(x: 98, y: 92, width: 650, height: 72), size: 66, weight: .black, fill: .white)
drawText("קבלות לעצמאים בישראל", rect: CGRect(x: 102, y: 174, width: 620, height: 54), size: 36, weight: .heavy, fill: color(0xcfe7ff))
drawText("Недорогое приложение для квитанций", rect: CGRect(x: 102, y: 232, width: 650, height: 48), size: 31, weight: .bold, fill: color(0xffd78f))

drawText("להפיק קבלות מהאייפון", rect: CGRect(x: 98, y: 396, width: 880, height: 88), size: 54, weight: .black, fill: color(0x071f42), align: .right, lineHeight: 60)
drawText("PDF • WhatsApp • מייל • סיכום שנתי", rect: CGRect(x: 100, y: 486, width: 880, height: 52), size: 34, weight: .heavy, fill: color(0x0866ff), align: .right)

let phoneA = CGRect(x: 112, y: 585, width: 260, height: 562)
let phoneB = CGRect(x: 400, y: 585, width: 260, height: 562)
rounded(CGRect(x: phoneA.minX - 12, y: phoneA.minY - 12, width: phoneA.width + 24, height: phoneA.height + 24), radius: 38, fill: color(0x071f42, alpha: 0.10))
rounded(CGRect(x: phoneB.minX - 12, y: phoneB.minY - 12, width: phoneB.width + 24, height: phoneB.height + 24), radius: 38, fill: color(0x071f42, alpha: 0.10))
aspectFit(setup, in: phoneA)
aspectFit(dashboard, in: phoneB)

rounded(CGRect(x: 760, y: 610, width: 212, height: 212), radius: 28, fill: .white)
qr.draw(in: CGRect(x: 777, y: 627, width: 178, height: 178), from: .zero, operation: .sourceOver, fraction: 1, respectFlipped: true, hints: [.interpolation: NSImageInterpolation.none])
drawText("App Store", rect: CGRect(x: 760, y: 842, width: 212, height: 42), size: 30, weight: .black, fill: color(0x071f42), align: .center)

let bullets = ["7 ימי ניסיון", "רכישה חד-פעמית לשימוש מלא", "ללא חשבון וללא איסוף נתונים", "מתאים לעוסק פטור ועסק קטן"]
for (index, bullet) in bullets.enumerated() {
    let y = 920 + CGFloat(index) * 68
    color(0x10a37f).setFill()
    NSBezierPath(ovalIn: CGRect(x: 934, y: y + 10, width: 22, height: 22)).fill()
    drawText(bullet, rect: CGRect(x: 690, y: y, width: 220, height: 60), size: 24, weight: .bold, fill: color(0x20364d), align: .right, lineHeight: 31)
}

rounded(CGRect(x: 98, y: 1192, width: 884, height: 76), radius: 18, fill: color(0x0866ff))
drawText("להורדה: apps.apple.com/il/app/receiptil/id6784747059", rect: CGRect(x: 128, y: 1210, width: 824, height: 44), size: 26, weight: .black, fill: .white, align: .center)

image.unlockFocus()
let rep = NSBitmapImageRep(data: image.tiffRepresentation!)!
let data = rep.representation(using: .png, properties: [.compressionFactor: 0.9])!
try data.write(to: outputURL)
print(outputURL.path)
