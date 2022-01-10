class Starter {
    constructor(srcs = []) {
        srcs.forEach(this.add)
    }

    add(src) {
        const script = document.createElement('script')
        script.src = src;
        document.head.append(script)
    }
}

new Starter(['src/scripts/app.js'])