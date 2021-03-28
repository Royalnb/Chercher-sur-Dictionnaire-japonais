browser.contextMenus.create({
    id: "ChercherSurDictionnaireJaponais",
    title: "Chercher sur Dictionnaire-japonais",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){
    const url = "http://www.dictionnaire-japonais.com/search.php?w="+ info.selectionText;

    browser.tabs.create({url:url});
}
