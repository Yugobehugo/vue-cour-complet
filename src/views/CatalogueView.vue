<template>
   <div class="about">
       <h1>test</h1>
        <div class = "articles" :key="'article-' + article.id" v-for="article in articles">
            <h2>{{ article.name }}</h2>
            <p>{{ article.description }}</p>
            <p>{{ article.price }}</p>
            <button @click="deleteArticle(article.id)">delete</button>
            <br>

        </div>

       <button
        @click="goTo('create')"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
      >
        Create
      </button>


       
   </div>
</template>

<script>
export default {
    name: "catalogue",
    data() {
        return {
            articles: [],
        };
    },
    created() {
        this.getAllArticles();
    },
    methods: {
        goTo(name){
      this.$router.push({name: name});
    },

        async deleteArticle(id) {
            const { data, error } = await this.$supabase.from("articles").delete().match({ id: id});

            if(data){
                this.getAllArticles();
            } else {
                console.log(error);
            }
        },
     
        async getAllArticles() {
            const { data, error } = await this.$supabase.from("articles").select();
            if (data) {
                this.articles = data;
            } else {
                console.log(error);
            }
        },
    },
};
</script>
