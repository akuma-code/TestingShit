class AppMain {
    constructor() {
        this.$out = document.querySelector('div.imgapp');
    }

    fff() {
        const {
            sl,
            sr,
            sm,
            fff
        } = new STV();
        this.$out.innerHTML = '';
        this.$out.insertAdjacentElement('beforeend', fff);
        this.$out.insertAdjacentElement('beforeend', sl);
        this.$out.insertAdjacentElement('beforeend', sm);
        this.$out.insertAdjacentElement('beforeend', sr);
    }
    ff() {
        const {
            sl,
            sr,
            ff
        } = new STV();
        this.$out.innerHTML = '';
        this.$out.insertAdjacentElement('beforeend', ff);
        this.$out.insertAdjacentElement('beforeend', sl);
        this.$out.insertAdjacentElement('beforeend', sr);
    }

    wintype(type) {
        return this[type]()
    }
}
const AP = new AppMain();

class STV {
    constructor() {
        this.sl
        this.sr;
        this.sm;
        this.fff
    }

    get sl() {
        const img = document.createElement('img');
        img.src = './src/assets/s1.svg';
        img.className = 'stv';
        this.addStvList(img)

        return img
    }
    get sr() {
        const img = document.createElement('img');
        img.src = './src/assets/s3.svg';
        img.className = 'stv';
        this.addStvList(img)
        return img
    }
    get sm() {
        const img = document.createElement('img');
        img.src = './src/assets/s3.svg';
        img.className = 'stv';
        this.addStvList(img)
        return img
    }

    get fff() {
        const img = document.createElement('img');
        img.src = './src/assets/fff.svg';
        img.className = 'fon abs';
        img.dataset.wt = "fff";
        return img
    }
    get ff() {
        const img = document.createElement('img');
        img.src = './src/assets/ff.svg';
        img.className = 'fon abs';
        img.dataset.wt = "ff";
        return img
    }
    addStvList(elem) {
        elem.addEventListener('mouseenter', (ev) => {
            ev.target.style.setProperty('opacity', '.5')
        });
        elem.addEventListener('mouseleave', (ev) => {
            ev.target.style.removeProperty('opacity')
        });
        elem.addEventListener('click', (ev) => {
            ev.target.toggleAttribute("isfix")
            ev.target.dataset.isstv = !ev.target.hasAttribute('isfix')
        })
    }
}

AP.wintype('fff')