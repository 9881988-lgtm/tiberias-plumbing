import AppKit
import Foundation
import CoreGraphics

guard CommandLine.arguments.count == 3 else { fatalError("Usage: build_catalog.swift catalogue.json output-directory") }
let input=URL(fileURLWithPath:CommandLine.arguments[1]), outputDir=URL(fileURLWithPath:CommandLine.arguments[2],isDirectory:true)
let raw=try Data(contentsOf:input)
let json=try JSONSerialization.jsonObject(with:raw) as! [String:Any]
let content=json["content"] as! [String:[String:Any]]
try FileManager.default.createDirectory(at:outputDir,withIntermediateDirectories:true)
let w:CGFloat=960, h:CGFloat=540, m:CGFloat=48
let ink=NSColor(srgbRed:0.09,green:0.12,blue:0.10,alpha:1)
let muted=NSColor(srgbRed:0.31,green:0.37,blue:0.32,alpha:1)
let green=NSColor(srgbRed:0.13,green:0.34,blue:0.25,alpha:1)
let lime=NSColor(srgbRed:0.84,green:0.98,blue:0.45,alpha:1)

for lang in ["ru","he","en"] {
  let t=content[lang]!, rtl=lang=="he"
  let s:(String)->String={t[$0] as! String}
  let services=t["services"] as! [[String]]
  let path=outputDir.appendingPathComponent("Auto_Secretary_\(lang.uppercased())_2026-11-10.pdf")
  var box=CGRect(x:0,y:0,width:w,height:h)
  let meta=[kCGPDFContextTitle as String:s("name"),kCGPDFContextAuthor as String:"Eydelstein Digital Lab"]
  guard let pdf=CGContext(path as CFURL,mediaBox:&box,meta as CFDictionary) else {fatalError("PDF open failed")}
  var cursor:CGFloat=0, page=0
  func attr(_ size:CGFloat,_ bold:Bool=false,_ color:NSColor=ink,_ forceLTR:Bool=false)->[NSAttributedString.Key:Any]{
    let p=NSMutableParagraphStyle();p.baseWritingDirection=rtl && !forceLTR ? .rightToLeft:.leftToRight;p.alignment=rtl && !forceLTR ? .right:.left;p.minimumLineHeight=size*1.30;p.maximumLineHeight=size*1.30
    return [.font:NSFont(name:bold ? "Arial-BoldMT":"ArialMT",size:size)!, .foregroundColor:color,.paragraphStyle:p]
  }
  func draw(_ text:String,_ rect:CGRect,_ size:CGFloat,_ bold:Bool=false,_ color:NSColor=ink,_ ltr:Bool=false)->CGFloat{
    let a=NSAttributedString(string:text,attributes:attr(size,bold,color,ltr))
    let b=a.boundingRect(with:CGSize(width:rect.width,height:10000),options:[.usesLineFragmentOrigin,.usesFontLeading])
    let height=ceil(b.height)
    a.draw(with:CGRect(x:rect.minX,y:rect.minY,width:rect.width,height:height+2),options:[.usesLineFragmentOrigin,.usesFontLeading])
    return height
  }
  func text(_ value:String,_ size:CGFloat=10,_ bold:Bool=false,_ color:NSColor=ink,_ gap:CGFloat=7,_ forceLTR:Bool=false){
    let rendered=value.replacingOccurrences(of:"—",with:"-").replacingOccurrences(of:"–",with:"-").replacingOccurrences(of:"‑",with:"-")
    let a=NSAttributedString(string:rendered,attributes:attr(size,bold,color,forceLTR))
    let needed=ceil(a.boundingRect(with:CGSize(width:w-2*m,height:10000),options:[.usesLineFragmentOrigin,.usesFontLeading]).height)
    precondition(cursor+needed<h-55,"Overflow \(lang) page \(page): \(value.prefix(45))")
    _=draw(rendered,CGRect(x:m,y:cursor,width:w-2*m,height:needed+2),size,bold,color,forceLTR)
    cursor+=needed+gap
  }
  func begin(){
    page+=1;pdf.beginPDFPage(nil);pdf.saveGState();pdf.translateBy(x:0,y:h);pdf.scaleBy(x:1,y:-1)
    NSGraphicsContext.saveGraphicsState();NSGraphicsContext.current=NSGraphicsContext(cgContext:pdf,flipped:true)
    _=draw("Eydelstein Digital Lab",CGRect(x:m,y:25,width:300,height:25),15,true,ink,true)
    _=draw("GALANY CRM  /  AUTO SERVICE",CGRect(x:m,y:49,width:300,height:18),8,true,green,true)
    pdf.setFillColor(lime.cgColor);pdf.fill(CGRect(x:w-m-35,y:27,width:35,height:35));cursor=82
  }
  func end(){
    pdf.setStrokeColor(green.cgColor);pdf.setLineWidth(0.6);pdf.move(to:CGPoint(x:m,y:h-51));pdf.addLine(to:CGPoint(x:w-m,y:h-51));pdf.strokePath()
    _=draw("10.11.2026  |  \(page)/4",CGRect(x:m,y:h-43,width:130,height:15),8,false,muted,true)
    _=draw(s("disclaimer"),CGRect(x:170,y:h-43,width:w-m-170,height:15),8,false,muted)
    NSGraphicsContext.restoreGraphicsState();pdf.restoreGState();pdf.endPDFPage()
  }
  func benefit(_ pair:[String]){text(pair[0],18,true,green,5);text(pair[1],14.8,false,ink,13)}
  begin()
  text(s("name"),34,true,ink,15);text(s("lead"),20,false,muted,22)
  text("1,000 ₪",48,true,ink,5);text(s("period"),18,true,green,12)
  text(s("billing"),16,false,ink,16);text(s("launch"),15,false,muted,12)
  end()
  begin()
  text(s("servicesTitle"),28,true,ink,15)
  for pair in services.prefix(4){benefit(pair)}
  end()
  begin()
  text(s("servicesTitle"),28,true,ink,15)
  for pair in services.suffix(3){benefit(pair)}
  text(s("promise"),14,false,muted,10)
  end()
  begin()
  text(s("costTitle"),26,true,green,9);text(s("example"),14.5,false,ink,9)
  text(s("external"),14,false,muted,15)
  text(s("safetyTitle"),22,true,green,7);text(s("safety"),14,false,ink,13)
  let site="https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/auto-secretary/"+(lang=="he" ? "":lang+"/")
  text(s("cta"),17,true,green,7)
  let linkY=cursor
  text("9881988@gmail.com  |  +972 55 507 1400",15,true,ink,6,true)
  text("Website: Eydelstein Digital Lab / Auto Service",14,false,green,4,true)
  pdf.setURL(URL(string:site)! as CFURL,for:CGRect(x:m,y:h-cursor,width:w-2*m,height:cursor-linkY+4))
  end();pdf.closePDF()
  print("Created \(path.path)")
}
