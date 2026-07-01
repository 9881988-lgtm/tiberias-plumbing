import AppKit
import CoreImage
import Foundation

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let siteURL = "https://9881988-lgtm.github.io/tiberias-plumbing/pattaya-excursions/"
let outputURL = root.appendingPathComponent("pattaya-excursions/assets/social/facebook-pattaya-excursions-4x5.png")

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

func strokeRounded(_ rect: CGRect, radius: CGFloat, stroke: NSColor, width: CGFloat) {
    stroke.setStroke()
    let path = NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius)
    path.lineWidth = width
    path.stroke()
}

func aspectFill(_ image: NSImage, in rect: CGRect, alpha: CGFloat = 1) {
    let size = image.size
    let scale = max(rect.width / size.width, rect.height / size.height)
    let drawSize = CGSize(width: size.width * scale, height: size.height * scale)
    let drawRect = CGRect(x: rect.midX - drawSize.width / 2, y: rect.midY - drawSize.height / 2, width: drawSize.width, height: drawSize.height)
    image.draw(in: drawRect, from: .zero, operation: .sourceOver, fraction: alpha, respectFlipped: true, hints: nil)
}

func drawImageClipped(_ image: NSImage, rect: CGRect, radius: CGFloat) {
    NSGraphicsContext.saveGraphicsState()
    NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius).addClip()
    aspectFill(image, in: rect)
    NSGraphicsContext.restoreGraphicsState()
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

func pill(_ text: String, rect: CGRect, fill: NSColor, textColor: NSColor, size: CGFloat = 28) {
    rounded(rect, radius: rect.height / 2, fill: fill)
    drawText(text, rect: CGRect(x: rect.minX + 18, y: rect.minY + (rect.height - size * 1.32) / 2, width: rect.width - 36, height: rect.height), size: size, weight: .heavy, fill: textColor, align: .center)
}

let kohLarn = NSImage(contentsOf: root.appendingPathComponent("pattaya-excursions/assets/images/koh-larn.jpg"))!
let sanctuary = NSImage(contentsOf: root.appendingPathComponent("pattaya-excursions/assets/images/sanctuary-of-truth.jpg"))!
let nongNooch = NSImage(contentsOf: root.appendingPathComponent("pattaya-excursions/assets/images/nong-nooch.jpg"))!
let qr = makeQRCode(siteURL, size: 210)

let width = 1080
let height = 1350
let image = NSImage(size: NSSize(width: width, height: height))
image.lockFocusFlipped(true)

let canvas = CGRect(x: 0, y: 0, width: width, height: height)
NSGradient(colors: [color(0x052b4f), color(0x007c8a), color(0xf6efe1)])!.draw(in: canvas, angle: -90)
aspectFill(kohLarn, in: canvas, alpha: 0.72)

NSGradient(colors: [color(0x03192f, alpha: 0.92), color(0x03192f, alpha: 0.58), color(0x03192f, alpha: 0.18)])!.draw(in: canvas, angle: 90)
color(0x03192f, alpha: 0.26).setFill()
NSBezierPath(rect: canvas).fill()

pill("ПАТТАЙЯ • ЭКСКУРСИИ", rect: CGRect(x: 58, y: 58, width: 420, height: 58), fill: color(0xffffff, alpha: 0.18), textColor: .white, size: 24)

drawText("Экскурсии\nв Паттайе", rect: CGRect(x: 58, y: 146, width: 760, height: 250), size: 88, weight: .black, fill: .white, lineHeight: 94)
drawText("Острова • храмы • шоу • аквапарки • Бангкок", rect: CGRect(x: 62, y: 390, width: 860, height: 70), size: 34, weight: .heavy, fill: color(0xffdfb8))

let photoTop = CGRect(x: 58, y: 500, width: 454, height: 250)
let photoBottom = CGRect(x: 548, y: 500, width: 474, height: 250)
drawImageClipped(sanctuary, rect: photoTop, radius: 24)
drawImageClipped(nongNooch, rect: photoBottom, radius: 24)
strokeRounded(photoTop, radius: 24, stroke: color(0xffffff, alpha: 0.35), width: 2)
strokeRounded(photoBottom, radius: 24, stroke: color(0xffffff, alpha: 0.35), width: 2)

rounded(CGRect(x: 58, y: 792, width: 964, height: 244), radius: 28, fill: color(0xffffff, alpha: 0.94))
drawText("Подберём маршрут под вашу дату и отель", rect: CGRect(x: 96, y: 826, width: 880, height: 58), size: 36, weight: .black, fill: color(0x08243d))

let items = ["Ко Лан и Ко Самет", "Храм Истины и Нонг Нуч", "Шоу, зоопарк, аквапарки", "Частные поездки и Бангкок"]
for (index, item) in items.enumerated() {
    let x = index % 2 == 0 ? 100 : 548
    let y = 910 + (index / 2) * 54
    color(0x0969da).setFill()
    NSBezierPath(ovalIn: CGRect(x: CGFloat(x), y: CGFloat(y + 8), width: 18, height: 18)).fill()
    drawText(item, rect: CGRect(x: CGFloat(x + 34), y: CGFloat(y), width: 390, height: 42), size: 27, weight: .bold, fill: color(0x20374d))
}

rounded(CGRect(x: 58, y: 1078, width: 964, height: 214), radius: 28, fill: color(0x071f38, alpha: 0.94))
drawText("Смотреть сайт и бронировать", rect: CGRect(x: 96, y: 1114, width: 620, height: 48), size: 38, weight: .black, fill: .white)
drawText("WhatsApp: +7 926 265-29-90", rect: CGRect(x: 98, y: 1172, width: 590, height: 42), size: 30, weight: .heavy, fill: color(0xffdfb8))
drawText("Сканируйте QR-код или откройте ссылку в посте", rect: CGRect(x: 98, y: 1220, width: 615, height: 58), size: 25, weight: .bold, fill: color(0xd8ecff))

rounded(CGRect(x: 758, y: 1096, width: 236, height: 236), radius: 22, fill: .white)
qr.draw(in: CGRect(x: 771, y: 1109, width: 210, height: 210), from: .zero, operation: .sourceOver, fraction: 1, respectFlipped: true, hints: [.interpolation: NSImageInterpolation.none])

image.unlockFocus()
let rep = NSBitmapImageRep(data: image.tiffRepresentation!)!
let data = rep.representation(using: .png, properties: [.compressionFactor: 0.9])!
try data.write(to: outputURL)
print(outputURL.path)
