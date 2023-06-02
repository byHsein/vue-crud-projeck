<template>
    <div class="h-full bg-custom bg-fixed">
        <div class="mx-auto w-xl px-5 my-0 items-center">
            <nav class="flex justify-between items-center pt-5 pb-5">
                <div class="poppins font-bold text-blue-400 text-4xl">CMS</div>
                <ul class="md:flex hidden items-center gap-10">
                    <router-link
                        to="/"
                        exact
                        class="nav-link"
                        :class="{
                            'text-gray-400': !isActive('/'),
                            'text-white': isActive('/'),
                        }">
                        <li
                            class="poppins font-normal text-base opacity-100 hover:text-white duration-300">
                            Homes
                        </li></router-link
                    >
                    <router-link
                        to="/CreateEdit"
                        exact
                        class="nav-link"
                        :class="{
                            'text-gray-400': !isActive('/CreateEdit'),
                            'text-white': isActive('/CreateEdit'),
                        }">
                        <li
                            class="poppins font-normal text-base opacity-100 hover:text-white duration-300">
                            Create & Edit
                        </li></router-link>
                    <li
                        class="poppins font-normal text-base opacity-100 text-gray-400 hover:text-white duration-300">
                        Details
                    </li>
                </ul>
                <div class="flex items-center gap-8">
                    <router-link to="/Login">
                        <div
                            class="poppins font-normal text-base opacity-100 text-gray-400 hover:text-white duration-300">
                            Log in
                        </div>
                    </router-link>
                    <div
                        class="w-[109px] h-[48px] bg-blue-custom poppins font-normal text-base text-white text-center pt-3 rounded-3xl">
                        Sign up
                    </div>
                </div>
            </nav>
        </div>
        <div class="bank bg-no-repeat bg-center bg-fixed w-full">
            <div class="bg-white opacity-10 h-[70px]"></div>
            <div class="mx-auto w-xl px-5">
                <h1
                    class="mt-[-50px] text-blue-400 opacity-100 text-xl font-bold poppins">
                    PRODUCTS LIST
                </h1>
                <div class="flex flex-wrap item-center justify-between gap-4 mt-20">
                    <div
                        v-for="product in products"
                        :key="product.id"
                        class="w-full flex flex-col-3 text-ellipsis h-full py-2 glass px-5  duration-300 rounded-lg">
                        <tr class="text-white pt-3 flex justify-between">
                            <div>
                                <div class="flex items-center pl-1 gap-2">
                                    <h1 class="poppins z-20 font-bold text-white">
                                        {{ product.id }}.
                                    </h1>
                                    <p class="poppins z-20 font-bold text-white text-xl">
                                        {{ product.title }}
                                    </p>
                                </div>
                                <p class="poppins z-20 text-md ml-7 font-bold text-white">
                                    Description:
                                    <span class="text-slate-400">
                                        {{ product.description }}
                                    </span>
                                </p>
                                <p class="poppins z-20 text-md ml-7 font-bold text-white">
                                    Price:
                                    <span class="text-slate-400">
                                        {{ product.price }}
                                    </span>
                                </p>
                            </div>
                        </tr>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
export default {
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        isActive(route) {
            return this.$route.path === route;
        },
        fetchData() {
            axios.get("https://dummyjson.com/products")
                .then(response => {
                // Update the 'users' data property with the fetched data
                this.products = response.data.products;
            })
                .catch(error => {
                console.error(error);
            });
        }
    },
    components: { FontAwesomeIcon }
};
</script>

<style>
.custom-glass {
    background: rgba(255, 255, 255, 0.14);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}

.bg-slate-900 {
    background-color: rgb(15 23 42);
}
.bg-slate-800 {
    background-color: rgb(30 41 59);
}
.bg-slate-800:hover {
    background-color: rgb(51 65 85);
}

.text-gray-400 {
    color: #cbd5e0;
}

.text-white {
    color: #ffffff;
}
.bg-white {
    background-color: #ffff;
}

.custom-glass {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.14);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}
.bank{
    background-image: url('../assets/bank.jpeg');
}
.bg-custom{
    background-color:rgba(7,12,15,255);
    height: 100%;
    background-attachment: fixed;
}
.glass{
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}
.glass:hover{
    background-color: rgb(51 65 85);
}

</style>
