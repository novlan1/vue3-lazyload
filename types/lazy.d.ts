import { LazyOptions, ValueFormatterObject } from './interface';
import { DirectiveBinding } from 'vue';
/**
 * Lazyload
 *
 * @export
 * @class Lazy
 */
export default class Lazy {
    options: LazyOptions;
    private _image;
    private _observer;
    constructor(options?: LazyOptions);
    /**
     * merge config
     *
     * @param {*} [options={}]
     * @memberof Lazy
     */
    config(options?: {}): void;
    /**
     * mount
     *
     * @param {HTMLElement} el
     * @param {DirectiveBinding<string>} binding
     * @memberof Lazy
     */
    mount(el: HTMLElement, binding: DirectiveBinding<string | ValueFormatterObject>): void;
    /**
     * update
     *
     * @param {HTMLElement} el
     * @memberof Lazy
     */
    update(el: HTMLElement): void;
    /**
     * unmount
     *
     * @param {HTMLElement} el
     * @memberof Lazy
     */
    unmount(el: HTMLElement): void;
    /**
     * force loading
     *
     * @param {HTMLElement} el
     * @param {string} src
     * @memberof Lazy
     */
    loadImages(el: HTMLElement, src: string, error?: string): void;
    /**
     * set img tag src
     *
     * @private
     * @param {HTMLElement} el
     * @param {string} src
     * @memberof Lazy
     */
    private _setImageSrc;
    /**
     * init IntersectionObserver
     *
     * @private
     * @param {HTMLElement} el
     * @param {string} src
     * @memberof Lazy
     */
    private _initIntersectionObserver;
    /**
     * only listen to image status
     *
     * @private
     * @param {string} src
     * @param {(string | null)} cors
     * @param {() => void} success
     * @param {() => void} error
     * @memberof Lazy
     */
    private _listenImageStatus;
    /**
     * to do it differently for object and string
     *
     * @public
     * @param {(ValueFormatterObject | string)} value
     * @returns {*}
     * @memberof Lazy
     */
    _valueFormatter(value: ValueFormatterObject | string): ValueFormatterObject;
}
