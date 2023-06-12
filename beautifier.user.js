// ==UserScript==
// @name         Gitee Beautifier
// @namespace    https://blog.wrxinyue.org/
// @version      0.0.3
// @description  Filter and hide specific Gitee link
// @author       WRXinYue
// @match        *://gitee.com/*
// @icon         https://cdn.wandhi.com/image/One.ico
// @license      MIT
// @homepageURL  https://tools.wandhi.com/scripts
// @supportURL   https://wiki.wandhi.com/
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        GM_addStyle
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_log
// ==/UserScript==
var version = "0.0.3";
var list = [];

(function() {
    'use strict';

    const hideLink = () => {
        const linkSelector = 'a[href="https://gitee.com/activity/10th/buy"]';

        const targetedLink = document.querySelector(linkSelector);
        console.log("targetedLink", targetedLink);
        if (targetedLink) {
            targetedLink.remove();
        }
    }

    const hideBirthdayPopup = () => {
        const popupElements = document.querySelectorAll('.birthday-logo-popup');
        for (const element of popupElements) {
            element.style.display = 'none';
        }
    }

    // const observeChanges = () => {
    //     // 观察DOM树变化
    //     const observer = new MutationObserver(() => {
    //         hideLink();
    //     });
    //     observer.observe(document.body, {
    //         childList: true,
    //         subtree: true
    //     });
    // };

    // You can customize these styles:
    const customStyles = `
    `;

    // put('div.fixed.right-5.bottom-32.z-40.md\\:hidden')

    /* ---------------------------------- 删除操作 ---------------------------------- */

    // 主页(右下角) => 智能客服
    put('div.cursor-pointer.md\\:hidden.mb-2.leading-none');
    // 主页(右下角) => 智能反馈
    put('div.mb-2.ml-auto.flex.h-10.w-10.cursor-pointer.items-center.justify-center.rounded-full.bg-white.leading-10.text-gray-400.shadow.hover\\:bg-gray-50');
    

    const init = () => {
        hideLink();
        hideBirthdayPopup();
        // observeChanges();
        GM_addStyle(customStyles);
    }

    window.onload = function(){
        setInterval(function() {
            init()

            for (let i = 0; i < list.length; i++) {
                var targetElement = document.querySelector(list[i]);
                if (targetElement) {
                    targetElement.remove();
                }
            }
        }, 1000)
    };

    // document.addEventListener('DOMContentLoaded', init)
})();



function isFirefox() {
    return navigator.userAgent.indexOf("Firefox") > 0;
}


function put(tag) {
    list.push(tag);
}