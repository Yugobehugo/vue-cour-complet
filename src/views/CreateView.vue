<template>
        <!-- <div class = "test">
      <div>
        <h2>Name</h2>
        <input type="text" v-model="name" />
      </div>

      <div>
        <h2>description</h2>
        <input type="varchar" v-model="description" />
      </div>

       <div>
        <h2>price</h2>
        <input type="float" v-model="price" />
      </div>

      <div>
        <h2>validate</h2>
        <input type="submit" value="Submit" v-on:click="submit" />
      </div>
    </div> -->
</template>
<script>


export default {
      async createArticle(id) {
            const { data, error } = await this.$supabase.from('articles').insert().match({ id: id});

         },
};
</script>
