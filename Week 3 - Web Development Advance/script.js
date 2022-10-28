const a = () => {
    console.log('A')
};

const b = () => {
    setTimeout(() => {
        console.log('B')
    }, 1000)
};

const c = () => {
    a()
    b()
    console.log('C')
};

c();