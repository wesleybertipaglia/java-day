export default class Theme {
    constructor(newTheme) {
        if (newTheme === undefined) {
            newTheme = this.theme;
        }
        this.theme = newTheme;
    }

    get theme() {
        if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
            return localStorage.getItem("theme");
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    }

    set theme(newTheme) {
        if (newTheme === "light") {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
        window.localStorage.setItem("theme", newTheme);
    }
}