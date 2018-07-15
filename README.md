# Vectorjs

This repo is inspired by [victor](https://github.com/maxkueng/victor/) ,provide Vector class with methods for common vector operations。

The big difference from [victor](https://github.com/maxkueng/victor/) is that the Vector instance is immutable. 

## features
 - immutable, a Vector is not changed by its methods.([victor](https://github.com/maxkueng/victor/) is mutable，you should always call it's clone() function, so I had to create this new repo)
 - include [big.js](http://mikemcl.github.io/big.js/), support for arbitrary-precision decimal arithmetic; you can always using other lib (like  [bignumber.js](https://github.com/MikeMcl/bignumber.js/) and [decimal.js](https://github.com/MikeMcl/decimal.js/)) with ease by config。
 - functions are chainable.


## License

[MIT](LICENSE).
