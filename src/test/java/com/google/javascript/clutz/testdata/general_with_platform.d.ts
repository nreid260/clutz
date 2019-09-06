// Generated from externs.zip//es6.js
declare namespace ಠ_ಠ.clutz {
  interface Transferable {
  }
}
// Generated from externs.zip//fido.js
declare namespace ಠ_ಠ.clutz.u2f {
  /**
   * An error object for responses
   */
  type Error = { errorCode : number , errorMessage : string | null } ;
}
// Generated from externs.zip//fido.js
declare namespace ಠ_ಠ.clutz.u2f {
  type RegisterRequest = { challenge : string , version : string } ;
}
// Generated from externs.zip//fido.js
declare namespace ಠ_ಠ.clutz.u2f {
  /**
   * Data object for a registered key.
   */
  type RegisteredKey = { appId : string | null , keyHandle : string , transports ? : string [] , version : string } ;
}
// Generated from externs.zip//fido.js
declare namespace ಠ_ಠ.clutz.u2f {
  /**
   * Data object for a sign response.
   */
  type SignResponse = { clientData : string , keyHandle : string , signatureData : string } ;
}
// Generated from externs.zip//fido.js
declare namespace ಠ_ಠ.clutz.u2f {
  /**
   * Data object for a single sign request.
   */
  type Transport = string ;
}
// Generated from externs.zip//fido.js
declare namespace ಠ_ಠ.clutz.u2f {
  function register (appId : string , registerRequests : ಠ_ಠ.clutz.u2f.RegisterRequest [] , registeredKeys : ಠ_ಠ.clutz.u2f.RegisteredKey [] , callback : (a : ಠ_ಠ.clutz.u2f.Error | ಠ_ಠ.clutz.u2f.SignResponse ) => any , opt_timeoutSeconds ? : number ) : any ;
}
// Generated from externs.zip//fido.js
declare namespace ಠ_ಠ.clutz.u2f {
  function sign (appId : string , challenge : string , registeredKeys : ಠ_ಠ.clutz.u2f.RegisteredKey [] , callback : (a : ಠ_ಠ.clutz.u2f.Error | ಠ_ಠ.clutz.u2f.SignResponse ) => any , opt_timeoutSeconds ? : number ) : any ;
}
// Generated from externs.zip//html5.js
declare namespace ಠ_ಠ.clutz {
  abstract class BaseRenderingContext2D implements CanvasDrawingStyles , CanvasPathMethods {
    private noStructuralTyping_BaseRenderingContext2D : any;
    arc (x : number , y : number , radius : number , startAngle : number , endAngle : number , opt_anticlockwise ? : boolean ) : void ;
    arcTo (x1 : number , y1 : number , x2 : number , y2 : number , radius : number ) : void ;
    beginPath ( ) : void ;
    bezierCurveTo (cp1x : number , cp1y : number , cp2x : number , cp2y : number , x : number , y : number ) : void ;
    canvas : HTMLCanvasElement | OffscreenCanvas ;
    clearRect (x : number , y : number , w : number , h : number ) : void ;
    clip (optFillRuleOrPath ? : Path2D | null | string , optFillRule ? : string ) : void ;
    closePath ( ) : void ;
    createImageData (sw : number , sh : number ) : ImageData ;
    createLinearGradient (x0 : number , y0 : number , x1 : number , y1 : number ) : CanvasGradient ;
    createPattern (image : HTMLImageElement | null | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas , repetition : string ) : CanvasPattern | null ;
    createRadialGradient (x0 : number , y0 : number , r0 : number , x1 : number , y1 : number , r1 : number ) : CanvasGradient ;
    drawFocusIfNeeded (element : GlobalElement | null ) : void ;
    drawImage (image : HTMLImageElement | null | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas , dx : number , dy : number , opt_dw ? : number , opt_dh ? : number , opt_sx ? : number , opt_sy ? : number , opt_sw ? : number , opt_sh ? : number ) : void ;
    ellipse (x : number , y : number , radiusX : number , radiusY : number , rotation : number , startAngle : number , endAngle : number , opt_anticlockwise ? : boolean ) : void ;
    fill (optFillRuleOrPath ? : Path2D | null | string , optFillRule ? : string ) : void ;
    fillColor : string ;
    fillRect (x : number , y : number , w : number , h : number ) : void ;
    fillStyle : string | CanvasGradient | CanvasPattern ;
    fillText (text : string , x : number , y : number , opt_maxWidth ? : number ) : void ;
    font : string ;
    getImageData (sx : number , sy : number , sw : number , sh : number ) : ImageData ;
    getLineDash ( ) : number [] ;
    globalAlpha : number ;
    globalCompositeOperation : string ;
    imageSmoothingEnabled : boolean ;
    isPointInPath (x : number , y : number , opt_fillRule ? : string ) : boolean ;
    isPointInStroke (x : number , y : number ) : boolean ;
    lineCap : string ;
    lineDashOffset : number ;
    lineJoin : string ;
    lineTo (x : number , y : number ) : void ;
    lineWidth : number ;
    measureText (text : string ) : TextMetrics ;
    miterLimit : number ;
    moveTo (x : number , y : number ) : void ;
    putImageData (imagedata : ImageData | null , dx : number , dy : number , opt_dirtyX ? : number , opt_dirtyY ? : number , opt_dirtyWidth ? : number , opt_dirtyHeight ? : number ) : void ;
    quadraticCurveTo (cpx : number , cpy : number , x : number , y : number ) : void ;
    rect (x : number , y : number , w : number , h : number ) : void ;
    restore ( ) : void ;
    rotate (angle : number ) : void ;
    save ( ) : void ;
    scale (x : number , y : number ) : void ;
    /**
     * Note: WebKit only
     */
    setFillColor (opt_a ? : number | string , opt_b ? : number , opt_c ? : number , opt_d ? : number , opt_e ? : number ) : void ;
    setLineDash (segments : number [] | null ) : void ;
    /**
     * Note: WebKit only
     */
    setStrokeColor (opt_a ? : number | string , opt_b ? : number , opt_c ? : number , opt_d ? : number , opt_e ? : number ) : void ;
    setTransform (m11 : number , m12 : number , m21 : number , m22 : number , dx : number , dy : number ) : void ;
    shadowBlur : number ;
    shadowColor : string ;
    shadowOffsetX : number ;
    shadowOffsetY : number ;
    stroke (optStroke ? : Path2D | null ) : void ;
    strokeColor : string ;
    strokeRect (x : number , y : number , w : number , h : number ) : void ;
    strokeStyle : string | CanvasGradient | CanvasPattern ;
    strokeText (text : string , x : number , y : number , opt_maxWidth ? : number ) : void ;
    textAlign : string ;
    textBaseline : string ;
    transform (m11 : number , m12 : number , m21 : number , m22 : number , dx : number , dy : number ) : void ;
    translate (x : number , y : number ) : void ;
  }
}
// Generated from externs.zip//html5.js
declare namespace ಠ_ಠ.clutz {
  interface CanvasDrawingStyles {
    font : string ;
    getLineDash ( ) : number [] ;
    lineCap : string ;
    lineJoin : string ;
    lineWidth : number ;
    miterLimit : number ;
    setLineDash (segments : number [] | null ) : void ;
    textAlign : string ;
    textBaseline : string ;
  }
}
// Generated from externs.zip//html5.js
declare namespace ಠ_ಠ.clutz {
  interface CanvasPathMethods {
    arc (x : number , y : number , radius : number , startAngle : number , endAngle : number , opt_anticlockwise ? : boolean ) : void ;
    arcTo (x1 : number , y1 : number , x2 : number , y2 : number , radius : number ) : void ;
    bezierCurveTo (cp1x : number , cp1y : number , cp2x : number , cp2y : number , x : number , y : number ) : void ;
    closePath ( ) : void ;
    lineTo (x : number , y : number ) : void ;
    moveTo (x : number , y : number ) : void ;
    quadraticCurveTo (cpx : number , cpy : number , x : number , y : number ) : void ;
    rect (x : number , y : number , w : number , h : number ) : void ;
  }
}
// Generated from externs.zip//html5.js
declare namespace ಠ_ಠ.clutz {
  interface NavigatorStorage {
    storage : StorageManager ;
  }
}
// Generated from externs.zip//html5.js
declare namespace ಠ_ಠ.clutz {
  class OffscreenCanvas implements GlobalEventTarget , Transferable {
    private noStructuralTyping_OffscreenCanvas : any;
    constructor (width : number , height : number ) ;
    addEventListener (type : string , listener : EventListener | null | ( (a : GlobalEvent ) => any ) , opt_options ? : boolean | AddEventListenerOptions ) : void ;
    convertToBlob (opt_options ? : { quality ? : number , type ? : string } ) : Promise < Blob > ;
    dispatchEvent (evt : GlobalEvent ) : boolean ;
    getContext (contextId : string , opt_options ? : GlobalObject ) : GlobalObject ;
    height : number ;
    removeEventListener (type : string , listener : EventListener | null | ( (a : GlobalEvent ) => any ) , opt_options ? : boolean | EventListenerOptions ) : void ;
    transferToImageBitmap ( ) : ImageBitmap ;
    width : number ;
  }
}
// Generated from externs.zip//html5.js
declare namespace ಠ_ಠ.clutz {
  class OffscreenCanvasRenderingContext2D extends BaseRenderingContext2D {
    private noStructuralTyping_OffscreenCanvasRenderingContext2D : any;
    canvas : OffscreenCanvas ;
  }
}
// Generated from externs.zip//html5.js
declare namespace ಠ_ಠ.clutz {   
  interface ShareData {
    text ? : string ;
    title ? : string ;
    url ? : string ;
  }
}
// Generated from externs.zip//html5.js
declare namespace ಠ_ಠ.clutz {
  type StorageEstimate = { quota : number , usage : number } ;
}
// Generated from externs.zip//html5.js
declare namespace ಠ_ಠ.clutz {
  class StorageManager {
    private noStructuralTyping_StorageManager : any;
    estimate ( ) : Promise < ಠ_ಠ.clutz.StorageEstimate > ;
    persist ( ) : Promise < boolean > ;
    persisted ( ) : Promise < boolean > ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class DirectoryEntry extends Entry {
    private noStructuralTyping_DirectoryEntry : any;
    createReader ( ) : DirectoryReader ;
    getDirectory (path : string , options ? : FileSystemFlags , successCallback ? : (a : DirectoryEntry ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    getFile (path : string , options ? : FileSystemFlags , successCallback ? : (a : FileEntry ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    removeRecursively (successCallback : ( ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class DirectoryEntrySync extends EntrySync {
    private noStructuralTyping_DirectoryEntrySync : any;
    createReader ( ) : DirectoryReaderSync ;
    getDirectory (path : string , options ? : GlobalObject | null ) : DirectoryEntrySync ;
    getFile (path : string , options ? : GlobalObject | null ) : FileEntrySync ;
    removeRecursively ( ) : void ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class DirectoryReader {
    private noStructuralTyping_DirectoryReader : any;
    readEntries (successCallback : (a : Entry [] ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class DirectoryReaderSync {
    private noStructuralTyping_DirectoryReaderSync : any;
    readEntries ( ) : EntrySync [] ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class Entry {
    private noStructuralTyping_Entry : any;
    copyTo (parent : DirectoryEntry , newName ? : string , successCallback ? : (a : Entry ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    filesystem : FileSystem ;
    fullPath : string ;
    getMetadata (successCallback : (a : Metadata ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    getParent (successCallback : (a : Entry ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    isDirectory : boolean ;
    isFile : boolean ;
    moveTo (parent : DirectoryEntry , newName ? : string , successCallback ? : (a : Entry ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    name : string ;
    remove (successCallback : ( ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    toURL (mimeType ? : string ) : string ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class EntrySync {
    private noStructuralTyping_EntrySync : any;
    copyTo (parent : DirectoryEntrySync , newName ? : string ) : EntrySync ;
    filesystem : FileSystemSync ;
    fullPath : string ;
    getMetadata ( ) : Metadata ;
    getParent ( ) : DirectoryEntrySync ;
    isDirectory : boolean ;
    isFile : boolean ;
    moveTo (parent : DirectoryEntrySync , newName ? : string ) : EntrySync ;
    name : string ;
    remove ( ) : void ;
    toURL (mimeType ? : string ) : string ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class FileEntry extends Entry {
    private noStructuralTyping_FileEntry : any;
    createWriter (successCallback : (a : FileWriter ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
    file (successCallback : (a : File ) => any , errorCallback ? : (a : FileError ) => any ) : void ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class FileEntrySync extends EntrySync {
    private noStructuralTyping_FileEntrySync : any;
    createWriter ( ) : FileWriterSync ;
    file ( ) : File ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class FileError extends DOMError {
    private noStructuralTyping_FileError : any;
    ABORT_ERR : number ;
    ENCODING_ERR : number ;
    INVALID_MODIFICATION_ERR : number ;
    INVALID_STATE_ERR : number ;
    NOT_FOUND_ERR : number ;
    NOT_READABLE_ERR : number ;
    NO_MODIFICATION_ALLOWED_ERR : number ;
    PATH_EXISTS_ERR : number ;
    QUOTA_EXCEEDED_ERR : number ;
    SECURITY_ERR : number ;
    SYNTAX_ERR : number ;
    TYPE_MISMATCH_ERR : number ;
    code : number ;
    static ABORT_ERR : number ;
    static ENCODING_ERR : number ;
    static INVALID_MODIFICATION_ERR : number ;
    static INVALID_STATE_ERR : number ;
    static NOT_FOUND_ERR : number ;
    static NOT_READABLE_ERR : number ;
    static NO_MODIFICATION_ALLOWED_ERR : number ;
    static PATH_EXISTS_ERR : number ;
    static QUOTA_EXCEEDED_ERR : number ;
    static SECURITY_ERR : number ;
    static SYNTAX_ERR : number ;
    static TYPE_MISMATCH_ERR : number ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class FileException {
    private noStructuralTyping_FileException : any;
    ABORT_ERR : number ;
    ENCODING_ERR : number ;
    INVALID_MODIFICATION_ERR : number ;
    INVALID_STATE_ERR : number ;
    NOT_FOUND_ERR : number ;
    NOT_READABLE_ERR : number ;
    NO_MODIFICATION_ALLOWED_ERR : number ;
    PATH_EXISTS_ERR : number ;
    QUOTA_EXCEEDED_ERR : number ;
    SECURITY_ERR : number ;
    SYNTAX_ERR : number ;
    TYPE_MISMATCH_ERR : number ;
    code : number ;
    static ABORT_ERR : number ;
    static ENCODING_ERR : number ;
    static INVALID_MODIFICATION_ERR : number ;
    static INVALID_STATE_ERR : number ;
    static NOT_FOUND_ERR : number ;
    static NOT_READABLE_ERR : number ;
    static NO_MODIFICATION_ALLOWED_ERR : number ;
    static PATH_EXISTS_ERR : number ;
    static QUOTA_EXCEEDED_ERR : number ;
    static SECURITY_ERR : number ;
    static SYNTAX_ERR : number ;
    static TYPE_MISMATCH_ERR : number ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class FileSaver {
    private noStructuralTyping_FileSaver : any;
    DONE : number ;
    INIT : number ;
    WRITING : number ;
    abort ( ) : void ;
    error : FileError | null ;
    onabort : ( (a : ProgressEvent ) => any ) | null ;
    onerror : ( (a : ProgressEvent ) => any ) | null ;
    onprogress : ( (a : ProgressEvent ) => any ) | null ;
    onwrite : ( (a : ProgressEvent ) => any ) | null ;
    onwriteend : ( (a : ProgressEvent ) => any ) | null ;
    onwritestart : ( (a : ProgressEvent ) => any ) | null ;
    readyState : number ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class FileSystem {
    private noStructuralTyping_FileSystem : any;
    name : string ;
    root : DirectoryEntry ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  interface FileSystemFlags {
    create ? : boolean ;
    exclusive ? : boolean ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class FileSystemSync {
    private noStructuralTyping_FileSystemSync : any;
    name : string ;
    root : DirectoryEntrySync ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class FileWriter extends FileSaver {
    private noStructuralTyping_FileWriter : any;
    length : number ;
    position : number ;
    seek (offset : number ) : void ;
    truncate (size : number ) : void ;
    write (blob : Blob ) : void ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  class FileWriterSync {
    private noStructuralTyping_FileWriterSync : any;
    length : number ;
    position : number ;
    seek (offset : number ) : void ;
    truncate (size : number ) : void ;
    write (blob : Blob ) : void ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  /**
   * LocalFileSystemSync interface, implemented by WorkerGlobalScope.
   */
  class LocalFileSystemSync {
    private noStructuralTyping_LocalFileSystemSync : any;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Metadata interface.
   */
  class Metadata {
    private noStructuralTyping_Metadata : any;
    modificationTime : GlobalDate ;
    size : number ;
  }
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  function requestFileSystemSync (type : number , size : number ) : FileSystemSync ;
}
// Generated from externs.zip//nonstandard_fileapi.js
declare namespace ಠ_ಠ.clutz {
  function webkitRequestFileSystemSync (type : number , size : number ) : FileSystemSync ;
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  class ByteLengthQueuingStrategy {
    private noStructuralTyping_ByteLengthQueuingStrategy : any;
    constructor (config : { highWaterMark : number } ) ;
    /**
     * If we don't want to be strict we can define chunk as {*}
     * and return as {number|undefined}
     */
    size (chunk : { byteLength : number } ) : number ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  class CountQueuingStrategy {
    private noStructuralTyping_CountQueuingStrategy : any;
    constructor (config : { highWaterMark : number } ) ;
    size (chunk : any ) : number ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  /**
   * A transform stream (https://streams.spec.whatwg.org/#transform-stream).
   */
  interface ITransformStream {
    readable : ReadableStream ;
    writable : WritableStream ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  /**
   * The ReadableByteStreamController constructor cannot be used directly;
   * it only works on a ReadableStream that is in the middle of being constructed.
   */
  interface ReadableByteStreamController {
    byobRequest : ReadableStreamBYOBRequest ;
    close ( ) : void ;
    desiredSize : number ;
    enqueue (chunk : ArrayBufferView ) : void ;
    error (err : any ) : void ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  /**
   * The ReadableStreamBYOBReader constructor is generally not meant to be used
   * directly; instead, a stream’s getReader() method should be used.
   */
  interface ReadableStreamBYOBReader {
    cancel (reason : any ) : Promise < any > ;
    closed : Promise < undefined > ;
    read (view : ArrayBufferView ) : Promise < { done : boolean , value : any } > ;
    releaseLock ( ) : void ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  interface ReadableStreamBYOBRequest {
    respond (bytesWritten : number ) : void ;
    respondWithNewView (view : ArrayBufferView ) : void ;
    view : ArrayBufferView ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  /**
   * The ReadableStreamDefaultController constructor cannot be used directly;
   * it only works on a ReadableStream that is in the middle of being constructed.
   */
  interface ReadableStreamDefaultController {
    close ( ) : void ;
    desiredSize : number ;
    enqueue (chunk : any ) : void ;
    error (err : any ) : void ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  /**
   * The ReadableStreamDefaultReader constructor is generally not meant to be used directly;
   * instead, a stream’s getReader() method should be used.
   */
  interface ReadableStreamDefaultReader {
    cancel (reason : any ) : Promise < any > ;
    closed : Promise < undefined > ;
    read ( ) : Promise < { done : boolean , value : any } > ;
    releaseLock ( ) : void ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  interface ReadableStreamIteratorOptions {
    preventCancel ? : boolean ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  interface ReadableStreamSource {
    autoAllocateChunkSize ? : number ;
    cancel ? : (a : any ) => Promise < any > | undefined ;
    pull ? : (a : ReadableByteStreamController | ReadableStreamDefaultController ) => PromiseLike < any > | undefined ;
    start ? : (a : ReadableByteStreamController | ReadableStreamDefaultController ) => PromiseLike < any > | undefined ;
    type ? : string ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  /**
   * The TransformStreamDefaultController class has methods that allow
   * manipulation of the associated ReadableStream and WritableStream.
   *
   * This class cannot be directly constructed and is instead passed by the
   * TransformStream to the methods of its transformer.
   */
  interface TransformStreamDefaultController {
    desiredSize : number ;
    enqueue (chunk : any ) : void ;
    error (reason : any ) : void ;
    terminate ( ) : void ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  interface TransformStreamTransformer {
    flush ? : (a : TransformStreamDefaultController ) => PromiseLike < any > | undefined ;
    start ? : (a : TransformStreamDefaultController ) => PromiseLike < any > | undefined ;
    transform ? : (a : any , b : TransformStreamDefaultController ) => PromiseLike < any > | undefined ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  class WritableStream {
    private noStructuralTyping_WritableStream : any;
    constructor (opt_underlyingSink ? : WritableStreamSink , opt_queuingStrategy ? : CountQueuingStrategy | ByteLengthQueuingStrategy | { highWaterMark ? : number , size ? : (a : any ) => number } ) ;
    abort (reason : any ) : Promise < undefined > ;
    getWriter ( ) : WritableStreamDefaultWriter ;
    locked : boolean ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  /**
   * The WritableStreamDefaultController constructor cannot be used directly;
   * it only works on a WritableStream that is in the middle of being constructed.
   */
  interface WritableStreamDefaultController {
    error (err : any ) : Promise < undefined > ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  interface WritableStreamDefaultWriter {
    abort (reason : any ) : Promise < undefined > ;
    close ( ) : Promise < undefined > ;
    closed : Promise < undefined > ;
    desiredSize : number ;
    ready : Promise < number > ;
    releaseLock ( ) : void ;
    write (chunk : any ) : Promise < undefined > ;
  }
}
// Generated from externs.zip//streamsapi.js
declare namespace ಠ_ಠ.clutz {
  interface WritableStreamSink {
    abort ? : (a : any ) => PromiseLike < any > | undefined ;
    close ? : ( ) => PromiseLike < any > | undefined ;
    start ? : (a : WritableStreamDefaultController ) => PromiseLike < any > | undefined ;
    write ? : (a : any , b : WritableStreamDefaultController ) => PromiseLike < any > | undefined ;
  }
}
// Generated from externs.zip//url.js
declare namespace ಠ_ಠ.clutz {
  type URLSearchParamsTupleType = string [] | null ;
}
// Generated from externs.zip//w3c_abort.js
declare namespace ಠ_ಠ.clutz {
  class AbortController {
    private noStructuralTyping_AbortController : any;
    abort ( ) : void ;
    signal : AbortSignal ;
  }
}
// Generated from externs.zip//w3c_abort.js
declare namespace ಠ_ಠ.clutz {
  interface AbortSignal extends GlobalEventTarget {
    aborted : boolean ;
    onabort : ( (a : GlobalEvent ) => any ) | null ;
  }
}
// Generated from externs.zip//w3c_clipboard.js
declare namespace ಠ_ಠ.clutz {
  interface Clipboard {
    readText ( ) : Promise < string > ;
    writeText (text : string ) : Promise < undefined > ;
  }
}
// Generated from externs.zip//w3c_navigation_timing.js
declare namespace ಠ_ಠ.clutz {
  /**
   * https://wicg.github.io/largest-contentful-paint/#largestcontentfulpaint
   */
  class LargestContentfulPaint extends PerformanceEntry {
    private noStructuralTyping_LargestContentfulPaint : any;
    element : GlobalElement | null ;
    id : string ;
    loadTime : number ;
    renderTime : number ;
    size : number ;
    url : string ;
  }
}
// Generated from externs.zip//w3c_navigation_timing.js
declare namespace ಠ_ಠ.clutz {
  /**
   * https://wicg.github.io/layout-instability/#sec-layout-shift
   */
  class LayoutShift extends PerformanceEntry {
    private noStructuralTyping_LayoutShift : any;
    hadRecentInput : boolean ;
    lastInputTime : number ;
    value : number ;
  }
}
// Generated from externs.zip//w3c_rtc.js
declare namespace ಠ_ಠ.clutz {
  class BlobEvent extends GlobalEvent {
    private noStructuralTyping_BlobEvent : any;
    constructor (type : string , eventInitDict : { data : Blob , timecode ? : number } ) ;
    data : Blob ;
    timecode : number ;
  }
}
// Generated from externs.zip//w3c_rtc.js
declare namespace ಠ_ಠ.clutz {
  interface RTCRtpSendParameters {
    /**
     * Possible string values are "maintain-framerate", "maintain-resolution", and
     * "balanced".
     */
    degradationPreference ? : string ;
    encodings : RTCRtpEncodingParameters [] ;
    transactionId ? : string ;
  }
}
// Generated from externs.zip//w3c_rtc.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Possible values are "sendrecv", "sendonly", "recvonly", and "inactive".
   */
  type RTCRtpTransceiverDirection = string ;
}
// Generated from externs.zip//w3c_rtc.js
declare namespace ಠ_ಠ.clutz {
  interface RTCRtpTransceiverInit {
    /**
     * The direction of the `RTCRtpTransceiver`. Defaults to "sendrecv".
     */
    direction ? : string | null ;
    sendEncodings ? : RTCRtpEncodingParameters [] | null ;
    /**
     * The streams to add to the tranceiver's sender.
     */
    streams ? : MediaStream [] | null ;
  }
}
// Generated from externs.zip//w3c_trusted_types.js
declare namespace ಠ_ಠ.clutz {
  let TrustedTypePolicyOptions : PrivateType;
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  class Animation implements GlobalEventTarget {
    private noStructuralTyping_Animation : any;
    constructor (effect ? : AnimationEffectReadOnly | null , timeline ? : AnimationTimeline | null ) ;
    addEventListener (type : string , listener : EventListener | null | ( (a : GlobalEvent ) => any ) , options ? : boolean | AddEventListenerOptions ) : void ;
    cancel ( ) : void ;
    currentTime : number ;
    dispatchEvent (evt : GlobalEvent ) : boolean ;
    effect : AnimationEffectReadOnly | null ;
    finish ( ) : void ;
    finished : Promise < undefined > ;
    id : string ;
    oncancel : ( (a : GlobalEvent ) => any ) | null ;
    onfinish : ( (a : GlobalEvent ) => any ) | null ;
    pause ( ) : void ;
    play ( ) : void ;
    playState : string ;
    playbackRate : number ;
    ready : Promise < undefined > ;
    removeEventListener (type : string , listener : EventListener | null | ( (a : GlobalEvent ) => any ) , options ? : boolean | EventListenerOptions ) : void ;
    reverse ( ) : void ;
    startTime : number ;
    timeline : AnimationTimeline ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  interface AnimationEffectReadOnly {
    getComputedTiming ( ) : ComputedTimingProperties ;
    timing : AnimationEffectTiming ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  interface AnimationEffectTiming extends AnimationEffectTimingReadOnly {
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  interface AnimationEffectTimingProperties {
    delay ? : number ;
    direction ? : string ;
    duration ? : number | string ;
    easing ? : string ;
    endDelay ? : number ;
    fill ? : string ;
    iterationStart ? : number ;
    iterations ? : number ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  interface AnimationEffectTimingReadOnly {
    delay : number ;
    direction : string ;
    duration : number | string ;
    easing : string ;
    endDelay : number ;
    fill : string ;
    iterationStart : number ;
    iterations : number ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  interface AnimationTimeline {
    currentTime : number | null ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  interface ComputedTimingProperties extends AnimationEffectTimingProperties {
    activeDuration : number ;
    currentIteration : number | null ;
    endTime : number ;
    localTime : number | null ;
    progress : number | null ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  class DocumentTimeline implements AnimationTimeline {
    private noStructuralTyping_DocumentTimeline : any;
    currentTime : number | null ;
    getAnimations ( ) : Animation [] ;
    play (effect : AnimationEffectReadOnly ) : Animation ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  class GroupEffect implements AnimationEffectReadOnly {
    private noStructuralTyping_GroupEffect : any;
    constructor (children : AnimationEffectReadOnly [] , timing ? : AnimationEffectTimingProperties | null ) ;
    children : AnimationEffectReadOnly [] ;
    getComputedTiming ( ) : ComputedTimingProperties ;
    timing : AnimationEffectTiming ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  interface KeyframeAnimationOptions extends KeyframeEffectOptions {
    id ? : string ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  class KeyframeEffect extends KeyframeEffectReadOnly {
    private noStructuralTyping_KeyframeEffect : any;
    constructor (target : GlobalElement | null , frames : { [ key: string ]: any } [] | { [ key: string ]: any [] } , options ? : number | AnimationEffectTimingProperties | null ) ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  interface KeyframeEffectOptions extends AnimationEffectTimingProperties {
    /**
     * Possible values: 'replace', 'add', 'accumulate'
     */
    composite ? : string ;
    /**
     * Possible values: 'replace', 'accumulate'
     */
    iterationComposite ? : string ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  class KeyframeEffectReadOnly implements AnimationEffectReadOnly {
    private noStructuralTyping_KeyframeEffectReadOnly : any;
    constructor (target : GlobalElement | null , frames : { [ key: string ]: any } [] | { [ key: string ]: any [] } , options ? : number | AnimationEffectTimingProperties | null ) ;
    getComputedTiming ( ) : ComputedTimingProperties ;
    onsample ? : ( (a : number , b : KeyframeEffect , c : Animation ) => any ) | null ;
    target : GlobalElement | null ;
    timing : AnimationEffectTiming ;
  }
}
// Generated from externs.zip//web_animations.js
declare namespace ಠ_ಠ.clutz {
  class SequenceEffect implements AnimationEffectReadOnly {
    private noStructuralTyping_SequenceEffect : any;
    constructor (children : AnimationEffectReadOnly [] , timing ? : AnimationEffectTimingProperties | null ) ;
    children : AnimationEffectReadOnly [] ;
    getComputedTiming ( ) : ComputedTimingProperties ;
    timing : AnimationEffectTiming ;
  }
}
