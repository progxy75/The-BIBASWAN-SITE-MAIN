function generateUTMHref(ele) {

    // toChanges href with respect to UTM
    const utmData = localStorage.getItem("UTM");

    let params = undefined;
    try {
        const urlObject = new URL(utmData);
        params = urlObject.searchParams;
    }
    catch (e) {

    }

    const c_link = ele.getAttribute("href")?.replaceAll(
        "_UTM_CAMPAIGN_OR_INSTANCE_",
        params?.get("utm_campaign") ??
        INSTANCE_NAME
    ).replaceAll(
        "_UTM_CAMPAIGN_TYPE_",
        params?.get("utm_campaign") ?
            "Paid" :
            "Organic"
    ).replaceAll(
        "_UTM_CAMPAIGN_ID_",
        params?.get("utm_campaign_id")
    ).replaceAll(
        "_UTM_CAMPAIGN_",
        params?.get("utm_campaign")
    ).replaceAll(
        "_UTM_ADSET_ID_",
        params?.get("adset_id")
    ).replaceAll(
        "_UTM_AD_ID_",
        params?.get("ad_id")
    ).replaceAll(
        "_UTM_CONTENT_",
        params?.get("utm_content")
    ).replaceAll(
        "_UTM_SITE_ID_",
        params?.get("site_id")
    ).replaceAll(
        "_UTM_PID_",
        params?.get("pid")
    ).replaceAll(
        "_UTM_TERM_",
        params?.get("utm_term")
    );

    ele.setAttribute("href", c_link);

}


function setSidebannerClickListener(comments, newIns) {
    if (!comments) return;
    if (!comments.configs) return;
    if (!comments.configs["banner-type"]) return;
    let banner = undefined;

    if (comments.configs["banner-type"] === 'sidebar-register') {
        banner = newIns.querySelector('.widget.register-free-widget>.widget-content>a');
    }
    else if (comments.configs["banner-type"] === 'ask-a-doubt') {
        banner = newIns.querySelector('.widget.ask-about-widget>.widget-content>a');
    }
    if (!banner) return;
    generateUTMHref(banner);   
}

export {
    setSidebannerClickListener,
}