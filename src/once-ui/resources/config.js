const baseURL = 'demo.once-ui.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Tobe Energy - Delivering on Hydrogens Potential',
    description: 'Tobe Energy: Revolutionizing hydrogen production with innovative, efficient, and sustainable solutions for a cleaner future.'
}


// default open graph data
const og = {
    title: 'Tobe Energy - Delivering on Hydrogens Potential.',
    description: 'Tobe Energy: Revolutionizing hydrogen production with innovative, efficient, and sustainable solutions for a cleaner future.',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: 'Tobe Energy',
    description: 'Tobe Energy - Delivering on Hydrogens Potential.',
    email: 'colby@tobe.energy'
}

// social links
const social = {
    twitter: 'https://www.twitter.com/h2colby',
    linkedin: 'https://www.linkedin.com/company/tobe-energy/'
}

export { baseURL, style, meta, og, schema, social };
