var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, bindingMode, customElement, containerless } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
let MdcCardMedia = class MdcCardMedia {
    constructor(element) {
        this.element = element;
        this.class = null;
        this.image = null;
        this.size = null;
        this.repeat = null;
        this.height = null;
        this.scaled = null;
        this.cssString = '';
        this.log = getLogger('mdc-card-media');
    }
    bind() { }
    unbind() { }
    attached() {
        this.createCss();
        this.scaledChanged(this.scaled);
    }
    imageChanged() {
        this.createCss();
    }
    sizeChanged() {
        this.createCss();
    }
    repeatChanged() {
        this.createCss();
    }
    heightChanged() {
        this.createCss();
    }
    scaledChanged(newValue) {
        if (this.elementMedia) {
            this.elementMedia.classList.remove('mdc-card__media--square', 'mdc-card__media--16-9');
            switch (newValue) {
                case 'square':
                    this.elementMedia.classList.add('mdc-card__media--square');
                    break;
                case '16-9':
                    this.elementMedia.classList.add('mdc-card__media--16-9');
                    break;
            }
        }
    }
    createCss() {
        let value = '';
        if (this.image && this.image.length > 0) {
            value += 'background-image: url(\"' + this.image + '\");';
        }
        if (this.height && this.height.length > 0) {
            value += 'height:' + this.height + ';';
        }
        value += 'background-size:' + (this.size ? this.size : 'cover') + ';';
        value += 'background-repeat:' + (this.repeat ? this.repeat : 'no-repeat') + ';';
        this.cssString = value;
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay }),
    __metadata("design:type", String)
], MdcCardMedia.prototype, "class", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay }),
    __metadata("design:type", String)
], MdcCardMedia.prototype, "image", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay }),
    __metadata("design:type", String)
], MdcCardMedia.prototype, "size", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay }),
    __metadata("design:type", String)
], MdcCardMedia.prototype, "repeat", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay }),
    __metadata("design:type", String)
], MdcCardMedia.prototype, "height", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay }),
    __metadata("design:type", String)
], MdcCardMedia.prototype, "scaled", void 0);
MdcCardMedia = __decorate([
    customElement('mdc-card-media'),
    containerless(),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcCardMedia);
export { MdcCardMedia };
