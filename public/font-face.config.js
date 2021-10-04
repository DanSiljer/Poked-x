const fontFaceNode = require('@font-face/node');

fontFaceNode({
    input: {
        dir: './src/fonts',
    },
    output: {
        dir: './dist',
        resourceDir: './dist/fontResources',
        cssFileName: 'font-face.css',
    },
    fonts: [
        {
            name: 'Pokemon',
            weight: 200,
            style: 'normal',
            file: 'PokemonLight',
        },
        {
            name: 'Pokemon',
            weight: 400,
            style: 'normal',
            file: 'Pokemon-Regular',
        },
        {
            name: 'Pokemon',
            weight: 600,
            style: 'bold',
            file: 'Pokemon-Medium',
        },
    ],
});