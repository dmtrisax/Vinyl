<template>
    <header class="v-footer">
        <div class="v-footer__container">



            <img class="v-footer__logo" src="../assets/icons/Logo.svg" alt="">



            <div class="v-footer__location">
                <p>Location:</p>
                <p>10 W 37th St, New York, NY 10018</p>
            </div>

            <div class="v-footer__contacts">
                <p>Contact us:
                </p>
                <p class="contacts__info"><img src="../assets/icons/phone.png" alt="">+1 212-529-2081</p>
                <p class="contacts__info"><img src="../assets/icons/email.png" alt="">Rec@gmail.com</p>

            </div>
            <div class="v-footer__social-media">
                <img class="v-footer__social-media-icon" src="../assets/icons/inst.png" alt="">
                <img class="v-footer__social-media-icon" src="../assets/icons/telega.png" alt="">
                <img class="v-footer__social-media-icon" src="../assets/icons/youtube.png" alt="">
            </div>

        </div>
    </header>
</template>

<style>
.v-footer__container {
    min-height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background: #F95530;
    border: 1px solid #000000;

}

.v-footer__logo {
    max-width: 150px;
}


.v-footer__location {
    max-width: 180px;
}

.v-footer__contacts {
    max-height: 113px;

}

.contacts__info {
    display: flex;
    align-items: center;
    gap: 5px;
}


.v-footer__social-media {
    display: flex;
    gap: 10px;
}



.v-footer__social-media-icon {
    max-width: 40px;
}
</style>