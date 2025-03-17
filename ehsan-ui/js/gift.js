import{i as e}from"./countryCodeModule.js";import{i as t}from"./selectAmountModule.js";import{i as n}from"./otpModule.js";import{r as o}from"./replaceArabicNumerals.js";import{P as a}from"./redirectToPayment.js";import{M as r}from"./bootstrap.js";import"./tom-select.complete.js";const i=new a;!function(){const e=document.getElementById("giftKindsWrapper"),t=document.getElementById("donationScops"),n=document.getElementById("giftTemplates");let o=document.getElementById("finalGiftWrapper"),a=document.getElementById("finalGiftWrapper2"),r=document.getElementById("gift-content-error"),i=document.getElementById("gift-content");const l=document.getElementById("nextStep");function s(e){let t=document.getElementById("colorsWrapper"),n=document.getElementById("colorsWrapperShape");t.innerHTML="",n.innerHTML="",fetch(`/GetGiftColor/${e}`).then((e=>e.json())).then((e=>{!function(e){var t;let n=document.getElementById("colorsWrapper"),r=document.getElementById("colorsWrapperShape");if(n.innerHTML="",r.innerHTML="",null!==e&&e.length>0){for(let t=0;t<e.length;t++){let o=`\n        <div style="border-color: ${e[t].colourPicker} !important" data-image="${e[t].imageUrl}" data-id="${e[t].id}" class="selected-color-wrapper mt-2 align-items-center d-flex justify-content-center rounded-circle border-2 border ${0==t?"active-color":""}">\n          <label for="giftColorRB${t}" class="selected-color cursor-pointer w-40px h-40px rounded-circle ${0==t?"m-1":""}" data-image="${e[t].imageUrl}" style="background-color: ${e[t].colourPicker}">\n            <input type="radio" data-image="${e[t].imageUrl}" data-screenreader="${e[t].screenReaderDescription}" \n            value="${e[t].id}" class="selected-color opacity-0" id="giftColorRB${t}" name="giftColorRB" ${0===t?"checked":""}>\n          </label>\n        </div>`;n.innerHTML+=o,r.innerHTML+=o}null==(t=document.querySelector(".no-template-avialable"))||t.remove(),o.style.backgroundImage="url("+e[0].imageUrl+")",a.style.backgroundImage="url("+e[0].imageUrl+")",l.classList.remove("disabled")}else o.style.backgroundImage="",o.innerHTML='\n            \n      <div class="d-flex flex-column align-items-center h-100 justify-content-center no-template-avialable">     \n       <div class="align-items-center border border-neutral-3 d-flex h-48px justify-content-center rounded-circle w-48px">\n          <img src="/ehsan-ui/images/icons/info-circule-icon.svg" alt="no-data">          \n       </div>\n       <h6 class="mt-2">حدث خطأ أثناء تحميل البيانات أو قد تكون البيانات غير متاحة</h6>\n       <div class="d-flex align-items-center">\n          <p class="text-neutral-5 me-1 mb-0 fs-14px">يرجى التحقق من اتصالك بالإنترنت أو المحاولة مرة أخرى</p>\n          <a href="javascript:void(0);" onclick="window.location.reload();"><img src="/ehsan-ui/images/icons/reload-icon.svg" alt="no-data"></a>\n       </div>\n      </div>\n    ',a.style.backgroundImage="",a.innerHTML='\n    \n<div class="d-flex flex-column align-items-center h-100 justify-content-center no-template-avialable">     \n<div class="align-items-center border border-neutral-3 d-flex h-48px justify-content-center rounded-circle w-48px">\n  <img src="/ehsan-ui/images/icons/info-circule-icon.svg" alt="no-data">          \n</div>\n<h6 class="mt-2">حدث خطأ أثناء تحميل البيانات أو قد تكون البيانات غير متاحة</h6>\n<div class="d-flex align-items-center">\n  <p class="text-neutral-5 me-1 mb-0 fs-14px">يرجى التحقق من اتصالك بالإنترنت أو المحاولة مرة أخرى</p>\n  <a href="javascript:void(0);" onclick="window.location.reload();"><img src="/ehsan-ui/images/icons/reload-icon.svg" alt="no-data"></a>\n</div>\n</div>\n',l.classList.add("disabled")}(e)})).catch((e=>{console.log(e)}))}function c(e){fetch(`/GiftImage/${e}`).then((e=>e.json())).then((e=>{var t;if(e=e.result,t=e.attachments,e.attachmentId,n.innerHTML="",null!==t&&t.length>0?(t.forEach(((e,t)=>{const o=`\n           <label for="giftThumbnailsRB${e.id}" class="select-templete cursor-pointer border overflow-hidden p-0 mx-1 position-relative rounded-4 shadow-sm w-70px h-124px opacity-50 ${0==t?"border-primary opacity-100 w-80px h-142px":""} p-0" data-id=${e.occasionTemplateTypeId}>\n              <input data-id=${e.occasionTemplateTypeId} class="opacity-0 position-absolute start-0 top-0" type="radio" name="giftThumbnailsRB" id="giftThumbnailsRB${e.id}" value="${e.id}" aria-label="${e.occasionTemplateScreenReader}" ${0==t?"checked":""} data-sr-description='${e.screenReaderDescription}' data-sms-description='${e.smsImageDescription}'>               \n              <img data-id=${e.occasionTemplateTypeId} class="w-100 select-templete" title="نموذج قالب الهدية" src="${e.imageUrl}" alt="" onerror="this.src='/assets/images/Default_card.svg';this.onerror='';">               \n           </label>`;n.insertAdjacentHTML("beforeend",o)})),l.classList.remove("disabled")):(n.innerHTML='\n      <div class="d-flex flex-column align-items-center h-100 justify-content-center">     \n       <div class="align-items-center border border-neutral-3 d-flex h-48px justify-content-center rounded-circle w-48px">\n          <img src="/ehsan-ui/images/icons/info-circule-icon.svg" alt="no-data">          \n       </div>\n       <h6 class="mt-2">حدث خطأ أثناء تحميل البيانات أو قد تكون البيانات غير متاحة</h6>\n       <div class="d-flex align-items-center">\n          <p class="text-neutral-5 me-1 mb-0 fs-14px">يرجى التحقق من اتصالك بالإنترنت أو المحاولة مرة أخرى</p>\n          <a href="javascript:void(0);" onclick="window.location.reload();"><img src="/ehsan-ui/images/icons/reload-icon.svg" alt="no-data"></a>\n       </div>\n      </div>\n    ',l.classList.add("disabled")),e.attachments&&e.attachments.length>0){s(e.attachments[0].occasionTemplateTypeId)}})).catch((e=>{console.log(e)}))}document.addEventListener("DOMContentLoaded",(function(n){fetch("/GiftData").then((e=>e.json())).then((n=>{if(n.isSuccess){n=n.result,r.classList.add("d-none"),i.classList.remove("d-none");let o=n.giftOccasionImages,a=n.donationScope;o.forEach(((t,n)=>{let o=`\n          <label for="giftOccasionRB${t.id}" data-attachement="" data-label="${t.ocassionName}" data-amount="${[t.firstAmount,t.secondAmount,t.thirdAmount]}" data-id="${t.id}" class="me-2 gift-kind cursor-pointer border overflow-hidden rounded-3 w-145px h-145px mb-3 d-flex position-relative  ${0==n?"border-primary active-kind":""}" style="background-image: url(${t.templateImageUrl}); background-size: 145px 145px; background-repeat: no-repeat; background-position: center; background-color: white;">\n            <span data-id="${t.id}" class="w-100 p-2 position-absolute gift-kind">${t.ocassionName}</span>\n            <input id="giftOccasionRB${t.id}" type="radio" class="opacity-0 position-absolute" name="giftOccasionRB" value="${t.id}" />\n          </label>       \n        `;e.innerHTML+=o})),a.forEach(((e,n)=>{let o=`\n          <label for="giftOccasionRB" data-label="${e.name}" data-id="${e.id}" class="cursor-pointer scop-item align-items-center border d-flex flex-column w-145px h-145px justify-content-center mb-3 me-2 overflow-hidden position-relative rounded-4 ${0==n?"border-primary active-scope":""}">\n            <img src="${e.iconUrl||"/ehsan-ui/images/Ehsan-Logo.svg"}" class="h-40px w-40px" alt="${e.name}">\n            <h6 class="p-2 font-ehsan-medium text-black">${e.name}</h6>\n            <input type="radio" class="opacity-0 position-absolute" name="scop" value="${e.id}" />\n          </label>       \n        `;t.innerHTML+=o})),c(n.giftOccasionImages[0].id);let l=document.querySelectorAll(".scop-item");l.forEach((e=>{e.addEventListener("click",(()=>{l.forEach((e=>{e.classList.remove("border-primary","active-scope")})),e.classList.add("border-primary","active-scope")}))}))}else r.classList.remove("d-none"),i.classList.add("d-none")})).catch((e=>{}))})),e.addEventListener("click",(function(e){if(!e.target.classList.contains("gift-kind"))return!1;const t=document.querySelector(".not-shaps-available");t&&t.remove(),document.querySelectorAll(".gift-kind").forEach((function(e){e.closest(".gift-kind").classList.remove("border-primary","active-kind")})),e.target.closest("label.gift-kind").classList.add("border-primary","active-kind"),c(e.target.dataset.id)})),n.addEventListener("click",(function(e){if(!e.target.classList.contains("select-templete"))return!1;document.querySelectorAll("img.select-templete").forEach((function(e){e.closest("label.select-templete").classList.remove("border-primary","opacity-100","w-80px","h-142px")})),e.target.closest("label.select-templete").classList.add("border-primary","opacity-100","w-80px","h-142px"),s(e.target.dataset.id)})),colorsWrapper.addEventListener("click",(function(e){if(e.stopPropagation(),!e.target.classList.contains("selected-color"))return!1;document.querySelectorAll("label.selected-color").forEach((function(e){e.classList.remove("m-1","active-color")})),e.target.closest(".selected-color-wrapper").querySelector(".selected-color").classList.add("m-1","active-color"),o.style.backgroundImage="url("+e.target.dataset.image+")"})),colorsWrapperShape.addEventListener("click",(function(e){if(e.stopPropagation(),!e.target.classList.contains("selected-color"))return!1;document.querySelectorAll("label.selected-color").forEach((function(e){e.classList.remove("m-1","active-color")})),e.target.closest(".selected-color-wrapper").querySelector(".selected-color").classList.add("m-1","active-color"),a.style.backgroundImage="url("+e.target.dataset.image+")"}))}(),function(){const t=document.querySelectorAll(".country-code");e(t)}();new MutationObserver((t=>{t.forEach((t=>{t.addedNodes.forEach((t=>{t instanceof HTMLElement&&t.querySelector(".country-code")&&e(t.querySelectorAll(".country-code"))}))}))})).observe(document.body,{childList:!0,subtree:!0});const l=document.getElementById("nextStep"),s=document.getElementById("previousStep");let c=document.querySelector(".amountRadioBtns");const d='<div class="text-danger fs-14px required-message">الحقل مطلوب</div>',u=document.getElementById("donationAmountLimit"),m=document.getElementById("addGiftee"),p=document.getElementById("donateNow");let f=document.querySelector(".gifteeBoxDetails");const g=document.querySelector(".input-senderName"),v=document.querySelector(".show-amount-main"),h=document.getElementById("finalGiftWrapper"),y=document.getElementById("finalGiftWrapper2"),b=document.querySelector(".input-gifteeName"),L=document.getElementById("AnotherAmountAdd"),x=document.getElementById("gifteeContainer"),S=document.querySelector("#verificationMobileNumber");let E=[];function I(e){const t=e.closest(".input-group")?e.closest(".input-group").nextElementSibling:e.nextElementSibling;if(t&&t.classList.contains("required-message")&&t.remove(),!e.value.trim())return e.closest(".input-group")?e.closest(".input-group").insertAdjacentHTML("afterend",d):e.insertAdjacentHTML("afterend",d),e.classList.add("border-danger"),!1;if(e.classList.contains("AnotherAmountAdd")&&e.value<=0)return e.classList.add("border-danger"),e.closest(".input-group").insertAdjacentHTML("afterend",'<div class="text-danger fs-14px required-message">المبلغ غير صحيح</div>'),!1;if(e.classList.contains("mobile-number")){const t=e.closest(".mobile-container").querySelector(".country-code"),n=(null==t?void 0:t.dataset.code)||"";if("966+"===n?e.setAttribute("maxlength",9):e.setAttribute("maxlength",13),"966+"===n){if(!/^5\d{8}$/.test(e.value)){const t='<div class="text-danger fs-14px required-message">رقم جوال سعودي غير صحيح. يجب أن يبدأ بـ5 ويحتوي على 9 أرقام.</div>';return e.closest(".input-group").insertAdjacentHTML("afterend",t),e.classList.add("border-danger"),!1}}else if(e.value.length<5||e.value.length>13){const t='<div class="text-danger fs-14px required-message">رقم الجوال يجب أن يتكون من 5 أرقام على الأقل و13 رقمًا كحد أقصى.</div>';return e.closest(".input-group").insertAdjacentHTML("afterend",t),e.classList.add("border-danger"),!1}}return e.classList.remove("border-danger"),!0}function w(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=window.getComputedStyle(h),a=parseInt(o.width,10)||300,r=parseInt(o.height,10)||150;t.width=a,t.height=r;const i=new Image;i.src=getComputedStyle(h).backgroundImage.slice(5,-2),i.onload=function(){n.drawImage(i,0,0,a,r);const e=Math.max(Math.round(a/50),16);n.font=`${e}px IBMPlexSansArabic-Medium`,n.fillStyle="black",n.textAlign="right";const o=a/720,l=r/600,s=a-130*o,c=210*l,d=s,u=c+160*l;if(n.fillText((null==b?void 0:b.value.trim())||"",s,c),n.fillText((null==g?void 0:g.value.trim())||"",d,u),v.checked){const e=a-45*o,t=r/2+45*l,i=`بمبلغ ${L.value} ر.س`;n.fillText(i,e,t)}const m=h.querySelector("canvas");m&&m.remove(),h.appendChild(t)},i.onerror=function(){console.error("Failed to load background image")}}function k(e){let t;const n=(null==b?void 0:b.value.trim())||"",o=(null==g?void 0:g.value.trim())||"";if(!y)return void console.error("finalGiftWrapper2 not found in the DOM");const a=document.createElement("canvas"),r=a.getContext("2d"),i=window.getComputedStyle(y),l=parseInt(i.width,10)||300,s=parseInt(i.height,10)||150;a.width=l,a.height=s;const c=new Image;c.src=getComputedStyle(y).backgroundImage.slice(5,-2),c.onload=function(){r.drawImage(c,0,0,l,s);const e=Math.max(Math.round(l/45),15);r.font=`${e}px IBMPlexSansArabic-Medium`,r.fillStyle="black",r.textAlign="right";const i=l/720,d=s/600,u=l-130*i,m=210*d,p=m+160*d;if(r.fillText(n,u,m),r.fillText(o,u,p),v.checked){t=`بمبلغ ${L.value} ر.س`;const e=l-45*i,n=s/2+45*d;r.fillText(t,e,n)}const f=y.querySelector("canvas");f&&f.remove(),y.appendChild(a)},c.onerror=function(){console.error("Failed to load background image")}}l.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"}),s.classList.remove("d-none");let n=document.querySelectorAll(".step-one"),o=document.querySelectorAll(".step-two"),a=document.querySelectorAll(".step-wrapper");E=document.querySelector(".active-kind").dataset.amount.split(",").map(Number),c.innerHTML="",E.forEach((function(e){let t=`<button type="button" class="btn-secondary btn flex-fill donate-input selected-amount" data-amount="${e}" aria-label="${e} ريال سعودي" aria-pressed="false">${e}<small class="ms-1">ر.س</small></button>`;c.insertAdjacentHTML("beforeend",t)})),a[0].classList.add("active","complete-step"),a[1].classList.add("current-step"),n.forEach((e=>{e.classList.add("d-none")})),o.forEach((e=>{e.classList.remove("d-none")})),t();let r=document.querySelectorAll(".amountRadioBtnsMain .selected-amount");w(),k(),r.forEach((function(e,t){e.addEventListener("click",w),e.addEventListener("click",k)})),this.classList.add("d-none")})),s.addEventListener("click",(function(e){e.preventDefault(),this.classList.add("d-none");let t=document.querySelectorAll(".step-one"),n=document.querySelectorAll(".step-two"),o=document.querySelectorAll(".step-wrapper");o[0].classList.remove("active","complete-step"),o[1].classList.remove("current-step"),t.forEach((e=>{e.classList.remove("d-none")})),n.forEach((e=>{e.classList.add("d-none")})),l.classList.remove("d-none")})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("validateMobileNumberForSender"),t=document.getElementById("SenderName"),o=document.querySelector(".sender-gift-mobile-number"),a=document.getElementById("senderNameErrorMessage"),i=document.getElementById("senderGiftMobileNumberMessage"),l=document.getElementById("msgLimitationError"),s=document.getElementById("validateMobileNumberModal");let c;const d=document.querySelectorAll(".verification-inputs-otp");function u(){const e=t.value.trim();return a&&e.length<2?(a.textContent="الاسم يجب أن يكون على الأقل حرفين",a.classList.remove("d-none"),!1):a&&!/^[A-Za-z\u0600-\u06FF\s]{2,}$/.test(e)?(a.textContent="الاسم لا يجب أن يحتوي على أحرف خاصة",a.classList.remove("d-none"),!1):a?(a.textContent="",a.classList.add("d-none"),!0):void 0}function m(){const t=o.value.trim();if(e.dataset.valid){e.dataset.validnumber!=t?(e.dataset.valid=!1,S.dataset.valid=!1,e.classList.remove("d-none")):(e.dataset.valid=!0,e.classList.add("d-none"),S.dataset.valid=!0,S.classList.add("d-none"))}return/^5\d{8}$/.test(t)?(i.textContent="",i.classList.add("d-none"),!0):(i.textContent="رقم الجوال يجب أن يبدأ بـ5 ويتكون من 9 أرقام",i.classList.remove("d-none"),!1)}s&&(c=new r(s)),d.forEach((function(e){var t,o;let a=e.querySelectorAll(".otp-input"),r=null==(t=e.closest(".validate-mobile-wrapper"))?void 0:t.querySelector("#validateOtp"),i=null==(o=e.closest("#validateMobileNumberModal"))?void 0:o.querySelector("#closeValidationMobileModal");n(a,r,"/gift/ValidateOtp/",i,c)})),null==p||p.classList.add("disabled"),t.addEventListener("input",(function(){u()})),null==o||o.addEventListener("input",(function(){m()})),null==e||e.addEventListener("click",(function(t){if(e.dataset.valid=!1,m(),u(),t.preventDefault(),!u()||!m())return!1;e.disabled=!0,p.classList.add("disabled");let n=o.value.trim();fetch("gift/SendOtp/"+("0"+n),{method:"POST",headers:{"Content-Type":"application/json"},async:!1}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){if(e.isSuccess)if(c){c.show(),document.getElementById("aliaseMobileNumber").textContent=n.slice(-4),setTimeout((()=>{const e=document.getElementById("code1");e&&e.focus()}),1e3)}else console.error("validateOtpModal is not defined");else i.classList.remove("d-none"),i.textContent=e.result,l?(l.textContent=e.result,l.classList.remove("d-none")):console.error("msgLimitationError element not found")})).catch((function(e){console.error("Fetch error:",e)})).finally((function(){e.disabled=!1}))}))})),m.addEventListener("click",(function(e){if(5==document.querySelectorAll(".gifteeBoxDetails").length)return e.preventDefault(),void(this.disabled=!0);!async function(e){try{const n=E.map((e=>`GiftAmounts=${encodeURIComponent(e)}`)).join("&"),o=await fetch(`/gift/new-giftee?index=1&stockItemPrice=null&storeItemPrice=null&orphansMonthlyValue=null&remainingMonths=null&${n}&ShowHideAmount=true&validateMobile=true`,{method:"GET"});if(!o.ok)throw new Error("Failed to load giftee structure");const a=await o.text();"addGifteeImage"==e.id&&(e=e.closest("button")),e.closest("#addGiftee").insertAdjacentHTML("beforebegin",a),t()}catch(n){console.error("Error adding giftee:",n)}}(e.target)})),x.addEventListener("click",(function(e){if(e.target.classList.contains("remove-giftee-item")){e.target.closest(".gifteeBoxDetails").remove();document.querySelectorAll(".gifteeBoxDetails").length<5&&(m.disabled=!1)}})),null==f||f.addEventListener("input",w),null==g||g.addEventListener("input",w),null==v||v.addEventListener("change",w),null==f||f.addEventListener("input",k),null==g||g.addEventListener("input",k),null==v||v.addEventListener("change",k),p.addEventListener("click",(function(e){var t,n,a,r;const l=document.querySelector(".step-two").querySelectorAll('input[data-required="true"]');let s=document.querySelectorAll('#colorsWrapper [name="giftColorRB"]');if(!function(e){let t=!0;return e.forEach((e=>{if(e.classList.contains("sender-gift-mobile-number"))return!1;I(e)||(t=!1),e.addEventListener("input",(()=>{null==u||u.classList.add("d-none"),e.classList.contains("number-only")&&(e.value=e.value.replace(/[^0-9\u0660-\u0669]/g,"")),e.value=o(e.value),I(e)}))})),S&&"false"==S.dataset.valid?(S.classList.remove("d-none"),t=!1):S&&S.dataset.valid&&S.classList.add("d-none"),t}(l))return;const c=document.getElementById("SenderName"),d=document.querySelector(".active-scope"),m=document.querySelector(".active-kind");let f,g,v=document.querySelector(".sender-gift-mobile-number"),h=document.querySelector(".isAuthenticated");v&&(f=null==(t=document.querySelector(".sender-gift-mobile-number"))?void 0:t.closest(".mobile-container"),g="+"+f.querySelector(".country-code").selectedOptions[0].text.split("+")[0]),h&&(g="+966");var y=new FormData;document.querySelectorAll(".gifteeBoxDetails").forEach(((e,t)=>{const n="+"+e.querySelector(".country-code").selectedOptions[0].textContent.match(/\d+/)[0],o=e.querySelector(".input-gifteeName"),a=e.querySelector(".input-gifteeNumber"),r=e.querySelector(".AnotherAmountAdd"),i=e.querySelector(".country-code"),l=e.querySelector(".input-showAmount");y.append(`gifteeInformation[${t}][amount]`,r.value),y.append(`gifteeInformation[${t}][gifteeName]`,o.value),y.append(`gifteeInformation[${t}][gifteeMobileNumber]`,a.value),y.append(`gifteeInformation[${t}][showHideAmount]`,l.checked),y.append(`gifteeInformation[${t}][CountryCodeGifteeId]`,i.value),y.append(`gifteeInformation[${t}][Code]`,n)})),y.append("SenderCode",g),y.append("SenderCountryCodeGifteeId",f.querySelector(".country-code").value),y.append("senderName",c.value),y.append("senderMobileNumber",f.querySelector(".input-gifteeNumber").value),y.append("senderPhoneNumber",null==(n=f.querySelector(".input-gifteeNumber"))?void 0:n.value),y.append("attachments[0][Id]",s.length>0&&(null==(a=[...s].find((e=>e.checked)))?void 0:a.value)),y.append("attachmentId",s.length>0&&(null==(r=[...s].find((e=>e.checked)))?void 0:r.value)),y.append("OcassionName",m&&m.dataset.label),y.append("gifteeManagementId",m&&m.dataset.id),y.append("donationScopeId",d&&d.dataset.id),y.append("donationScopeName",d&&d.dataset.label),y.append("sendCopyToSender",document.querySelector("#SendCopyToSender").checked),p.classList.add("disabled"),fetch("/gift/pay",{method:"POST",body:y}).then((e=>e.json())).then((e=>{if(i.redirectToPayment(!0),i.handleResponse(!1),e.isSuccess)window.location.href=e.redirectToUrl;else{p.classList.remove("disabled");const t=document.querySelectorAll(".error-fields");t&&t.forEach((e=>e.remove())),i.handleResponse(!0),e.error.forEach(((e,t)=>{}))}})).catch((e=>{console.log(e)}))})),document.addEventListener("keydown",(function(e){"Enter"!==e.key||s.classList.contains("d-none")||p&&(e.preventDefault(),p.click())}));
//# sourceMappingURL=gift.js.map
