// docsify configuration
window.$docsify = {
  name: 'محاسبات ریاضی با SageMath',
  homepage: 'main.md',
  loadSidebar: 'sidebar.md',
  loadNavbar: false,
  subMaxLevel: 2,
  // call mathjax when page loaded
  plugins: [
      function(hook, vm){
          hook.doneEach(function () {
          MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        })
      }
  ],
  search:{
      placeholder: 'جستجو ...',
      noData: 'موردی یافت نشد.'
  }
}
