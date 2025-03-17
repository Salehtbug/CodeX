// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
        });
    }

    // Modal functionality
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const joinUsBtn = document.getElementById('joinUsBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeBtns = document.querySelectorAll('.close-modal');

    // Hero Slider functionality (without images)
    const heroSlides = document.querySelectorAll('.hero-slide');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    const slideCount = heroSlides.length;

    // Function to show a specific slide
    function showSlide(index) {
        heroSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        sliderDots.forEach(dot => {
            dot.classList.remove('active');
        });
        heroSlides[index].classList.add('active');
        sliderDots[index].classList.add('active');
        currentSlide = index;
    }

    // Function to show next slide
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slideCount) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }

    // Function to show previous slide
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slideCount - 1;
        }
        showSlide(prevIndex);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(0);
    let slideInterval = setInterval(nextSlide, 2000);
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        heroSlider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 2000);
        });
    }

    // Chatbot functionality
    const chatbotIcon = document.getElementById('chatbotIcon');
    const chatbotBox = document.getElementById('chatbotBox');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendMessage = document.getElementById('sendMessage');

    // Toggle chatbot visibility
    if (chatbotIcon) {
        chatbotIcon.addEventListener('click', function () {
            chatbotBox.style.display = 'block';
            chatbotIcon.style.display = 'none';
        });
    }

    if (closeChatbot) {
        closeChatbot.addEventListener('click', function () {
            chatbotBox.style.display = 'none';
            chatbotIcon.style.display = 'flex';
        });
    }

    // Function to add a message to the chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'user-message' : 'bot-message';

        const messagePara = document.createElement('p');
        messagePara.textContent = message;

        messageDiv.appendChild(messagePara);
        chatbotMessages.appendChild(messageDiv);

        // Scroll to the bottom of the messages
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Function to get bot response
    function getBotResponse(userMessage) {
        // Convert message to lowercase for easier matching
        const message = userMessage.toLowerCase();

        // Define responses based on keywords
        if (message.includes('سلام') || message.includes('مرحبا') || message.includes('اهلا')) {
            return 'وعليكم السلام! كيف يمكنني مساعدتك اليوم؟';
        } else if (message.includes('تبرع') || message.includes('تبرعات')) {
            return 'يمكنك التبرع من خلال الضغط على زر "تبرع الآن" في أي من حملات التبرع المعروضة على الموقع. هل تحتاج لمساعدة في اختيار حملة معينة؟';
        } else if (message.includes('افطار') || message.includes('صائم')) {
            return 'حملة إفطار الصائمين هي إحدى حملاتنا الرئيسية خلال شهر رمضان. هدفنا توفير 50,000 وجبة إفطار للمحتاجين. يمكنك المساهمة بالضغط على "تبرع الآن" في قسم إفطار الصائمين.';
        } else if (message.includes('متطوع') || message.includes('تطوع')) {
            return 'للتطوع معنا، يرجى إنشاء حساب على المنصة ثم التوجه إلى صفحة "الأنشطة" واختيار النشاط الذي ترغب بالتطوع فيه والضغط على "سجل كمتطوع".';
        } else if (message.includes('حساب') || message.includes('تسجيل')) {
            return 'يمكنك إنشاء حساب بالضغط على زر "إنشاء حساب" في أعلى الصفحة، ثم ملء النموذج بالمعلومات المطلوبة.';
        } else if (message.includes('نشاط') || message.includes('انشطة') || message.includes('أنشطة')) {
            return 'لدينا العديد من الأنشطة المتاحة مثل إفطار الصائمين، دعم الأسر المتعففة، المساعدات الطبية، وتقليل هدر الطعام. يمكنك الاطلاع على التفاصيل في صفحة "الأنشطة".';
        } else if (message.includes('اتصال') || message.includes('تواصل')) {
            return 'يمكنك التواصل معنا عبر البريد الإلكتروني: info@ramadandonations.com أو الهاتف: +123 456 7890';
        } else if (message.includes('شكرا') || message.includes('شكراً')) {
            return 'العفو! سعدنا بمساعدتك. هل هناك أي استفسار آخر؟';
        } else {
            return 'عذراً، لم أفهم استفسارك. هل يمكنك إعادة صياغته أو طرح سؤال آخر حول التبرعات، الأنشطة، أو التطوع؟';
        }
    }

    // Send message when button is clicked
    if (sendMessage) {
        sendMessage.addEventListener('click', function () {
            sendUserMessage();
        });
    }

    // Send message when Enter key is pressed
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendUserMessage();
            }
        });
    }

    // Function to handle sending user message
    function sendUserMessage() {
        const userMessage = chatbotInput.value.trim();

        if (userMessage !== '') {
            // Add user message to chat
            addMessage(userMessage, true);

            // Clear input field
            chatbotInput.value = '';

            // Get and display bot response after a short delay
            setTimeout(function () {
                const botResponse = getBotResponse(userMessage);
                addMessage(botResponse);
            }, 500);
        }
    }
});
