const navList = [
  { name: '首页', css: '', link: '/', alias: '/home' },
  { name: '文章', css: '', link: '/articles' },
  { name: '管理', css: '', link: '/manage' }
];

module.exports = {
  navList(route) {
    return navList.map(item => {
      if (route === void 0) {
        return item;
      }
      if (route === item.link || route === item.alias) {
        item.css = [item.css, 'selected'].join(' ');
      }
      return item;
    });
  }
};
