<template>
    <main class="layout">

        <h1>
            <slot name="title"></slot>
        </h1>

        <div>
            <section>
                <slot name="left"></slot>
            </section>

            <section>
                <slot name="right"></slot>
            </section>
        </div>

    </main>
</template>

<style scoped>
@media (max-width: 720px) {
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    section {
        width: 100%;
    }
}

h1 {
    color: var(--mapa-red);
}

div {
    display: flex;
    justify-content: space-between;
}

section {
    width: 50%;
}

main {
    border: none;
    padding: 20px;
}
</style>