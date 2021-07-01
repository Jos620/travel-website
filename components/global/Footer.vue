<template>
    <footer class="footer section" id="footer">
        <div class="footer__container container grid">
            <div class="footer__content grid">
                <div class="footer__data">
                    <h3 class="footer__title">Travel</h3>
                    <p class="footer__description">
                        Travel you choose the <br />
                        destination we offer you the <br />
                        experience.
                    </p>

                    <div>
                        <SocialLink class="footer__social" link="https://facebook.com" icon="ri-facebook-box-fill" />
                        <SocialLink class="footer__social" link="https://twitter.com" icon="ri-twitter-fill" />                        
                        <SocialLink class="footer__social" link="https://instagram.com" icon="ri-instagram-fill" />                        
                        <SocialLink class="footer__social" link="https://youtube.com" icon="ri-youtube-fill" />                        
                    </div>
                </div>

                <div class="footer__data">
                    <FooterList title="About" :data="about" />
                </div>

                <div class="footer__data">
                    <FooterList title="Company" :data="company" />
                </div>

                <div class="footer__data">
                    <FooterList title="Support" :data="support" />
                </div>
            </div>

            <div class="footer__rights">
                <p class="footer__copy">
                    &#169; 2021 Mateus Ito. All rights reserved.
                </p>
                <div class="footer__terms">
                    <a href="#" class="footer__terms-link">Terms & Agreement</a>
                    <a href="#" class="footer__terms-link">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
    setup() {
        // this content can be requested from a CMS

        const about = ref([
            { text: 'About Us', link: '#' },
            { text: 'Features', link: '#' },
            { text: 'New & Blog', link: '#' },
        ])

        const company = ref([
            { text: 'Team', link: '#' },
            { text: 'Plan y pricing', link: '#' },
            { text: 'Become a member', link: '#' },
        ])

        const support = ref([            
            { text: 'FAQs', link: '#' },
            { text: 'Support Center', link: '#' },
            { text: 'Contact Us', link: '#' },
        ])

        return { about, company, support }
    }
}
</script>

<style scoped>
.footer__container {
    row-gap: 5rem;
}

.footer__content {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 2rem;
}

.footer__title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-5);
}

.footer__description {
    margin-bottom: var(--mb-2); 
}

.footer__social {
    font-size: 1.25rem;
    color: var(--title-color);
    margin-right: var(--mb-1-25);
}

.footer__rights {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    text-align: center;
}

.footer__copy,
.footer__terms-link {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
}

.footer__terms {
    display: flex;
    column-gap: 1.5rem;
    justify-content: center;
}

.footer__terms-link:hover {
    color: var(--text-color);
}

/* Medium Screens */
@media screen and (min-width: 768px) {
    .footer__rights {
        flex-direction: row;
        justify-content: space-between;
    }
}

/* Large Screens */
@media screen and (min-width: 1024px) {
    .footer__content {
        justify-items: center;
    }
}
</style>
