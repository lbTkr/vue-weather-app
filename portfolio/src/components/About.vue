<template>
    <section id="about" class="container">
        <h1>About</h1>
        <div class="row gx-5">
            <figure class="col-md-6">
                <img src="../assets/images/profile.jpg" alt="">
                <figcaption>About Heejoo Kang</figcaption>
            </figure>
            <p class="col-md-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, reprehenderit. Earum quos animi recusandae perferendis accusantium, omnis sapiente quasi voluptatibus ex provident tempore, amet quod nesciunt pariatur. Id, non quam.</p>
        </div>

        <article class="row mt-5">
            <h2>Skills</h2>
            <dl v-for="value in skills" :key="value">
                <dt class="lead">{{ value.name }}</dt>
                <dd>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" :style="{ width: value.level + '%' }"></div>
                    </div>
                </dd>
            </dl>
        </article>
    </section>
</template>

<script setup>
    const skills = [
        { name: 'HTML', level: 100 },
        { name: 'CSS', level: 100 },
        { name: 'JavaScript', level: 80 },
        { name: 'Vue', level: 60 },
        { name: 'Java', level: 30 },
    ];
</script>

<style lang="scss" scoped>
    #about {
        figure {
            img {
                width:100%;
            }
        }
    }
</style>