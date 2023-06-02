<template>
    <div class="h-full bg-custom bg-fixed">
        <div class="mx-auto w-xl px-5 my-0 ">
        </div>
        <div class="mx-auto w-xl px-5 my-0 items-center">
            <nav class="flex justify-between items-center pt-5 pb-5">
                <div class="poppins font-bold text-blue-400 text-4xl">
                    CMS
                </div>
                <ul class="hidden md:flex items-center gap-10">
                    <router-link to="/" exact class="nav-link" :class="{ 'text-gray-400': !isActive('/'), 'text-white': isActive('/') }"><li class="poppins font-normal text-base opacity-100 hover:text-white delay-75 ">Homes</li></router-link>
                    <router-link to="/CreateEdit" exact class="nav-link" :class="{ 'text-gray-400': !isActive('/CreateEdit'), 'text-white': isActive('/CreateEdit') }"><li class="poppins font-normal text-base opacity-100 hover:text-white delay-75 ">Create & Edit</li></router-link>
                    <li class="poppins font-normal text-base opacity-100 text-gray-400 hover:text-white delay-75 ">Details</li>
                </ul>
                <div class="flex items-center gap-8">
                    <div class="poppins font-normal text-base opacity-100 text-gray-400 hover:text-white delay-75  ">Log in</div>
                    <div class="w-[109px] h-[48px] bg-blue-custom poppins font-normal text-base text-white text-center pt-3 rounded-3xl">
                        Sign up
                    </div>
                </div>
            </nav>
        </div>
        <div class="bank bg-no-repeat bg-center bg-fixed w-full">
            <div class="bg-white opacity-10 h-[70px]"></div>
                <div class="mx-auto px-5">
                    <div class="mx-auto w-xl  ">
                        <h1 class=" mt-[-50px] text-blue-400 opacity-100 text-xl font-bold poppins"> CREATE & EDIT</h1>
                    </div>
                    <div class="mt-[80px] lg:mt-5 block lg:flex gap-3 items-center justify-center">
                        <div class="relative h-11 mt-0 lg:mt-16 w-full min-w-[200px]">
                            <input
                            v-model="id"
                            class="peer text-white h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label class="text-white after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-md font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Id
                            </label>
                        </div>
                        <div class="relative mt-16 h-11 w-full min-w-[200px]">
                            <input
                            v-model="title"
                            class="peer text-white h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label class="text-white after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-md font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Title
                            </label>
                        </div>
                        <div class="relative mt-16 h-11 w-full min-w-[200px]">
                            <input
                            v-model="description"
                            class="peer text-white h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label class="text-white after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-md font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Description
                            </label>
                        </div>
                        <div class="relative mt-16 h-11 w-full min-w-[200px]">
                            <input
                            v-model="price"
                            class="peer text-white h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label class="text-white after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-md font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Price
                            </label>
                        </div>
                        <div>
                            <button @click="createPost"  class="green-btn duration-300 mt-10 text-white font-bold py-2 px-6 rounded">
                                Create
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-wrap item-center gap-4 mt-20">
                        <div 
                            v-for="product in products"
                            :key="product.id"
                            class="w-full flex justify-between items-center text-ellipsis h-full py-2 glass px-5  duration-300 rounded-lg">
                            <tr class="text-white pt-3">
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
                            </tr>
                            <div class="flex items-center gap-4"> 
                                <div>
                                    <button class="green-btn duration-300 text-white font-bold py-2 px-4 rounded">
                                        Edit
                                    </button>
                                </div>
                                <div>
                                    <button @click="deleteItem(product.id)" class="red-btn duration-300 text-white font-bold py-2 px-4 rounded">
                                        Delete
                                    </button>
                                </div>
                            </div>
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
            products: [],
            id:'',
            title:'',
            description:'',
            price:''
        };
    },
    mounted() {
        this.fetchData();
        this.createPost();
    },
    methods: {
        isActive(route) {
            return this.$route.path === route;
        },
        
        fetchData() {
        axios.get('https://dummyjson.com/products')
            .then(response => {
            this.products = response.data.products;
            })
            .catch(error => {
            console.error(error);
            });
        },


        createPost() {
        axios.post('https://dummyjson.com/products/add', {
            id: this.id,
            title: this.title,
            description: this.description,
            price: this.price
        })
        .then(response => {
            this.products.push(response.data);
            console.log(response.data);
            this.resetFormData()
        })
        .catch(error => {
            console.log(error);
        });
        },


        resetFormData() {
            this.id = '';
            this.title = '';
            this.description = '';
            this.price = '';
        },


        async deleteItem(productId) {
        try {
            await axios.delete(`https://dummyjson.com/products/${productId}`);
            this.products = this.products.filter(product => product.id !== productId);
        } catch (error) {
            console.error(error);
        }
        },
    },
};
</script>

<style>
.bg-slate-900{
    background-color: rgb(15 23 42);
}
.bg-white{
    background-color: #fff;
}
.bg-transparent{
    background-color: transparent;
}
.green-btn{
    background-color: #33b249;
}
.green-btn:hover{
    background-color: #5adbb5;
}
.red-btn{
    background-color: rgb(159 18 57);
}
.red-btn:hover{
    background-color: rgb(190 18 60);
}

</style>