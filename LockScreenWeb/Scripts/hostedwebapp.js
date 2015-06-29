if (window.Windows) {
    // add the WinJS javascript file
    var windowsWinJS = document.createElement("script");
    windowsWinJS.type = "application/javascript";
    windowsWinJS.src = "ms-appx-web:///WinJS/js/WinJS.js";
    document.head.appendChild(windowsWinJS);

    // add the default js of application
    var windowsAppDefaultJS = document.createElement("script");
    windowsAppDefaultJS.type = "application/javascript";
    windowsAppDefaultJS.src = "ms-appx-web:///js/default.js";
    document.head.appendChild(windowsAppDefaultJS);
}