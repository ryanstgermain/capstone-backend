exports.seed = function (knex, Promise) {
    return knex('listings').del()
        .then(function () {
            return knex('listings').insert([{
                    title: 'Supreme Box Logo Crewneck (FW18)',
                    location: 'Denver',
                    list: 'I want to trade for a pair of Off-White blazers.',
                    description: 'The crewneck is brand new with tags.',
                    image: 'https://stockx.imgix.net/products/streetwear/Supreme-Box-Logo-Crewneck-FW18-Dark-Green.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1544119130'
                },
                {
                    title: 'Yeezy Boost 350V2 Static',
                    location: 'Colorado Springs',
                    list: 'I want to trade for a pair of Jordan 1s or even the semi frozen Yeezys.',
                    description: 'They are tried on twice. Overall a pretty clean shoe.',
                    image: 'https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Static/Images/Adidas-Yeezy-Boost-350-V2-Static/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1544657399'
                },
                {
                    title: 'Air Force 1 Low Off-White Volt',
                    location: 'Boulder',
                    list: 'I want to trade for the same pair of shoes but in the black colorway.',
                    description: 'Brand new still in the box never tried on once.',
                    image: 'https://stockx-360.imgix.net/Nike-Air-Force-1-Low-Off-White-Volt/Images/Nike-Air-Force-1-Low-Off-White-Volt/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1544566859'
                },
                {
                    title: 'Supreme Cordura S Logo 6-Panel Sand',
                    location: 'Aurora',
                    list: 'I want to trade for an older Supreme 5 panel hat preferably orange.',
                    description: 'Worn 3 times has a small stain.',
                    image: 'https://stockx.imgix.net/products/streetwear/Supreme-Cordura-S-Logo-6-Panel-Sand-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256'
                },
                {
                    title: 'Palace Jenny T-Shirt Citrus Yellow',
                    location: 'Fort Collins',
                    list: 'I want to trade for a different palace shirt I want a different one.',
                    description: 'Worn once got it when it dropped.',
                    image: 'https://stockx.imgix.net/products/streetwear/Palace-Jenny-T-Shirt-Citrus-Yellow.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256'
                },
                {
                    title: 'Supreme Shoulder Bag Black',
                    location: 'Grand Junction',
                    list: 'I want to trade for the Supreme utility bag in black or the waistbag.',
                    description: 'Brand new with tags, comes with everything included in the order.',
                    image: 'https://stockx.imgix.net/products/streetwear/Supreme-Shoulder-Bag-FW18-Black-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256'
                },
                {
                    title: 'Bape 1st Camo Tiger LS Tee Yellow',
                    location: 'Greeley',
                    list: 'I want to trade for a Bape Hoodie preferably the space camo hoodie.',
                    description: 'Worn a few times but is still in very good condition.',
                    image: 'https://stockx.imgix.net/products/streetwear/Bape-1st-Camo-Tiger-LS-Tee-Yellow.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1548720840'
                },
                {
                    title: 'Kaws Holiday Limited 7" Vinyl Figure',
                    location: 'Littleton',
                    list: 'I want to trade for the Supreme catchers mask.',
                    description: 'It is a little dusty but it has everything it came with fromn the order.',
                    image: 'https://stockx.imgix.net/products/streetwear/Kaws-Holiday-Limited-7-Vinyl-Figure-Brown.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1547880822'
                },
                {
                    title: 'Converse Chuck Taylor All-Star 70s Hi Off-White',
                    location: 'Lakewood',
                    list: 'I want to trade for a newer Supreme hoodie.',
                    description: 'They are 100% brand new and got them when they first dropped, still have them in the box.',
                    image: 'https://stockx-360.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Off-White/Images/Converse-Chuck-Taylor-All-Star-70s-Hi-Off-White/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1539027493'
                },
                {
                    title: 'Jordan 3 Retro Black Cement (2018)', 
                    location: 'Golden', 
                    list: 'I want to trade for some Jordan 11 retros.', 
                    description: 'Worn a few time there are a few scuffs on the bottom.', 
                    image: 'https://stockx-360.imgix.net/Air-Jordan-3-Retro-Black-Cement-2018/Images/Air-Jordan-3-Retro-Black-Cement-2018/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1538080256'
                },
                {
                    title: 'Adidas Yeezy 500 Blush', 
                    location: 'Westminster', 
                    list: 'I want to trade for Yeezy 350V2 butters.', 
                    description: 'Brand new still in box 100% never worn.', 
                    image: 'https://stockx-360.imgix.net/Adidas-Yeezy-500-Blush/Images/Adidas-Yeezy-500-Blush/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1538080256'
                },
                {
                    title: 'Adidas Yeezy Boost 350 V2 Semi Frozen Yellow', 
                    location: 'Arvada', 
                    list: 'I want to trade for the same shoes just a different size, mine are a size too small.', 
                    description: 'Brand new still in the box.', 
                    image: 'https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Semi-Frozen-Yellow/Images/Adidas-Yeezy-Boost-350-V2-Semi-Frozen-Yellow/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1538080256'
                },
                {
                    title: 'Jordan 1 Retro High Off-White University Blue', 
                    location: 'Broomfield', 
                    list: 'I want to trade for a pair of Off White air max 97s. Preferably the white ones.', 
                    description: 'Only tried on once. Comes with box and recept.', 
                    image: 'https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Off-White-University-Blue/Images/Air-Jordan-1-Retro-High-Off-White-University-Blue/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1538080256'
                },
                {
                    title: 'Jordan 4 Retro Travis Scott Cactus Jack', 
                    location: 'Thorton', 
                    list: 'I want to trade for a pair of the white Jordan 4 Levis collab.', 
                    description: 'Lightly used. Hard to tell that they were though.', 
                    image: 'https://stockx-360.imgix.net/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack/Images/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack/Lv2/img01.jpg?auto=format,compress&w=1117&q=90&updated_at=1538080256'
                },
                {
                    title: 'Supreme New Era Big Logo Headband Red', 
                    location: 'Castle Rock', 
                    list: 'I want to trade for a Supreme Gore-Tex hat in black or green.', 
                    description: 'Brand new still in the wrapping just dont want this one anymore.', 
                    image: 'https://stockx.imgix.net/products/streetwear/Supreme-New-Era-Big-Logo-Headband-Red.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1539261919'
                },
                {
                    title: 'Supreme Madonna Tee Black', 
                    location: 'Lone Tree', 
                    list: 'I want to trade for a Supreme TV tee or a Mike Kelly Supreme shirt.', 
                    description: '100% never worn but is not in the wrapping anymore.', 
                    image: 'https://stockx.imgix.net/products/streetwear/Supreme-Madonna-Tee-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256'
                }
            ]);
        });
};