<template>
    <div class="h-screen bg-custom">
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
        <div class="bank bg-no-repeat bg-center h-[90vh] w-full">
            <div class="bg-white opacity-10 h-[70px]"></div>
            <div class="mx-auto w-xl px-5">
                <h1
                    class="mt-[-50px] text-blue-400 opacity-100 text-xl font-bold poppins">
                    BANK LIST
                </h1>
                <div class="flex flex-wrap item-center gap-4 mt-20">
                    <div
                        v-for="item in banks"
                        :key="item.id"
                        class="w-full flex flex-col-3 text-ellipsis h-[100px] glass px-5  duration-300 rounded-lg">
                        <tr class="text-white pt-3">
                            <div class="flex items-center pl-1 gap-2">
                                <h1 class="poppins z-20 font-bold text-white">
                                    {{ item.id }}.
                                </h1>
                                <p class="poppins z-20 font-bold text-white text-xl">
                                    {{ item.name }}
                                </p>
                            </div>
                            <p class="poppins z-20 text-md ml-7 font-bold text-white">
                                Name:
                                <span class="text-slate-400">
                                    {{ item.account_name }}
                                </span>
                            </p>
                            <p class="poppins z-20 text-md ml-7 font-bold text-white">
                                Number:
                                <span class="text-slate-400">
                                    {{ item.account_number }}
                                </span>
                            </p>
                        </tr>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            banks: [],
        };
    },
    mounted() {
        axios
            .get("https://api.sfgw.senthir.dev/api/banks")
            .then((response) => {
                this.banks = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        isActive(route) {
            return this.$route.path === route;
        },
    },
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
