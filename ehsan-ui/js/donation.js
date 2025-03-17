import{P as e}from"./redirectToPayment.js";import{r as t}from"./replaceArabicNumerals.js";import"./bootstrap.js";const n=new e,r=document.getElementById("donateNow"),o=document.getElementById("donationAmountLimit"),a='<div class="text-danger fs-14px required-message">الحقل مطلوب</div>';function s(){const e=[],t=document.querySelectorAll(".gifteeBoxDetails"),n=document.querySelector("#SenderName");return t.forEach((t=>{var r,o,a,s;const d=n.value||"",l=(null==(r=t.querySelector(".input-gifteeName"))?void 0:r.value)||"",i=(null==(o=t.querySelector(".input-gifteeNumber"))?void 0:o.value)||"",c=t.querySelector(".country-code"),u=c.dataset.value||"",m=c.dataset.code||"";let f=0;f=document.querySelectorAll(".monthOptions").length>0?(null==(a=t.querySelector(".monthOptions"))?void 0:a.value)||"":Number((null==(s=t.querySelector(".final-amount"))?void 0:s.value)||0);const v={senderName:d,GifteeName:l,GifteeMobile:i,CountryCodeId:u,CountryCode:m,Amount:f};e.push(v)})),e}function d(e){const t=e.closest(".input-group")?e.closest(".input-group").nextElementSibling:e.nextElementSibling;if(t&&t.classList.contains("required-message")&&t.remove(),!e.value.trim()||0==e.value.trim())return e.closest(".input-group")?e.closest(".input-group").insertAdjacentHTML("afterend",a):e.insertAdjacentHTML("afterend",a),e.classList.add("border-danger"),!1;if(e.classList.contains("mobile-number")){const t=e.closest(".mobile-container").querySelector(".country-code"),n=(null==t?void 0:t.dataset.code)||"";if("966+"===n?e.setAttribute("maxlength",9):e.setAttribute("maxlength",13),"966+"===n){if(!/^5\d{8}$/.test(e.value)){const t='<div class="text-danger fs-14px required-message">رقم جوال سعودي غير صحيح. يجب أن يبدأ بـ5 ويحتوي على 9 أرقام.</div>';return e.closest(".input-group").insertAdjacentHTML("afterend",t),e.classList.add("border-danger"),!1}}else if(e.value.length<5||e.value.length>13){const t='<div class="text-danger fs-14px required-message">رقم الجوال يجب أن يتكون من 5 أرقام على الأقل و13 رقمًا كحد أقصى.</div>';return e.closest(".input-group").insertAdjacentHTML("afterend",t),e.classList.add("border-danger"),!1}}return e.classList.remove("border-danger"),!0}document.getElementById("details_donation").addEventListener("keydown",(e=>{document.querySelector(".donate-input").value<=0&&"Enter"===e.key&&e.preventDefault()})),null==r||r.addEventListener("click",(async function(e){var l,i;e.preventDefault();let c=document.getElementById("mobileNumberErr");c&&c.classList.add("d-none"),document.querySelectorAll(".required-message").forEach((e=>e.remove()));let u=document.querySelector("#SenderNameErr");u&&u.classList.add("d-none");const m=document.querySelector("#verificationMobileNumber");if(m&&0==m.dataset.valid)return m.classList.remove("d-none"),!1;const f=document.querySelector("#SenderName"),v=this.dataset.orphans,y=e.target.dataset.maxamount,g=document.querySelector('[name="__RequestVerificationToken"]').value,p=document.querySelector('[name="CartItems[0].caseId"]').value,b=document.querySelector('[name="CartItems[0].title"]').value,h=document.querySelector('[name="amount"]'),S=document.getElementById("initiativeType").value,q=document.getElementById("donateURL").dataset.url,L=document.getElementById("monthOptions")||null,E=document.getElementById("donateAsGiftCheckbox"),N=document.getElementById("donateAsGiftCheckboxOrphans"),A=document.querySelector(".sender-gift-mobile-number"),I=document.querySelector("#validateMobileNumberWrapper .input-gifteeNumber"),T=I?"0"+I.value:"",x=document.querySelector("#validateMobileNumberInGift");x&&"false"==x.dataset.validate&&(f.value||(f.insertAdjacentHTML("afterend",a),r.classList.add("disabled")),A.value||(A.closest("#mobileNumberContainer").insertAdjacentHTML("afterend",a),r.classList.add("disabled")));let k=!1;const w=null==(l=document.getElementById("showProjectName"))?void 0:l.checked;k=v?N.checked:E.checked;const j=null==(i=document.getElementById("ShowHideAmount"))?void 0:i.checked,M=function(e){let n=!0;e.forEach((e=>{if(e.classList.contains("sender-gift-mobile-number"))return!1;d(e)||(n=!1),e.addEventListener("input",(()=>{o.classList.add("d-none"),e.classList.contains("number-only")&&(e.value=e.value.replace(/[^0-9\u0660-\u0669]/g,"")),e.value=t(e.value),d(e)}))}));const r=document.querySelector("#verificationMobileNumber");r&&"false"==r.dataset.valid?(r.classList.remove("d-none"),n=!1):r&&r.dataset.valid&&r.classList.add("d-none");return n}(document.getElementById("details_donation").querySelectorAll('input[data-required="true"]'));if(!M)return;const B=k?function(){let e=document.querySelectorAll(".monthOptions");if(e.length>0){let t=0;return e.forEach((e=>{const n=Number(e.value)||0;t+=n>0?n:0})),t}{let e=0;return document.querySelectorAll(".final-amount").forEach((t=>{const n=Number(t.value)||0;e+=n>0?n:0})),e}}():Number(L?L.value:h.value);if(Number(B)>Number(y))return o.classList.remove("d-none"),!1;o.classList.add("d-none");const C={__RequestVerificationToken:g,Id:p,IsGift:k,ShowHideAmount:j,ShowHideProjectName:w,senderPhoneNumber:T||void 0,CartItems:[{CaseId:p,InitiativeType:Number(S),Amount:B,Title:b}],Gift:k?s():void 0};r.classList.add("disabled");try{const e=await fetch(q,{method:"POST",headers:{RequestVerificationToken:g,"x-antiforgery-token":g,"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(C)}),t=e.headers.get("content-type");if(n.redirectToPayment(!0),n.handleResponse(!1),e.ok&&t&&t.includes("application/json")){!function(e){e.isSuccess?window.location.href=e.redirectToUrl:function(e){n.handleResponse(!0),document.querySelectorAll(".server-error-msg").forEach((e=>e.remove())),e.error?e.error.forEach((e=>{const t=document.querySelector(`[name="${e.key}"]`);t&&t.closest(".mobile-container").insertAdjacentHTML("beforeend",`<span class="fs-14px text-danger server-error-msg d-block w-100">${e.errors[0].errorMessage}</span>`)})):e.redirectToUrl&&(window.location.href=e.redirectToUrl)}(e)}(await e.json()),r.classList.remove("disabled")}else{const t=await e.text();console.error("Unexpected response format:",t),srNotificationArea.innerHTML="حدث خطأ أثناء الانتقال إلى صفحة الدفع",n.handleResponse(!0)}}catch(H){console.error("Error:",H),r.classList.remove("disabled"),alert("A network error occurred. Please try again.")}}));
//# sourceMappingURL=donation.js.map
