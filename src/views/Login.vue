<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="username"
                    >
                        Username
                    </label>
                    <input
                        v-model="username"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                    />
                </div>
                <div class="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                    >
                        Password
                    </label>
                    <input
                        v-model="password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div class="flex items-center justify-between">
                    <button
                        @click.prevent="login"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Sign In
                    </button>
                    <a
                        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy; 2023 Acme Corporation. All rights reserved.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        login() {
            // Perform login logic here
            console.log("Username:", this.username);
            console.log("Password:", this.password);
        },
    },
};
</script>

<style>
/* Add custom styles here if needed */
</style>
