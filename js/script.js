(function () {
    window.onload = function () {
        new BlipChat()
            .withAppKey('c29zcGV0c2Fkb2Nhbzo1ODAyMzM0Ni1mZTc3LTRmM2YtOTA1Ni1jOTAxNzMyYmNjYWE=')
            .withButton({ "color": "#C2CC47", "icon": "" })
            .withCustomCommonUrl('https://hicaro-gabriel-9inh1.chat.blip.ai/')
            .build();
    }
})();