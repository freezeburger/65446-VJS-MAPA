<template>
    <main class="layout">

        <h1>
            <slot name="title"></slot>
        </h1>

        <section>
            <slot></slot>
        </section>

    </main>
</template>

<style scoped>
h1 {
    color: var(--mapa-red);
}

section {
    color: var(--mapa-blue);
}

main {
    border: none;
    padding: 20px;
}

/* @media (min-width: 1024px) {
    .layout {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
} */
</style>