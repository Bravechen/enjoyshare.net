/*
interface IProjectFiles {
  type: string; // dir, file
  name?: string;
  description?: string;
}

interface IProjectDir extends IProjectFiles {
  children: IProjectFiles[];
}

interface IProjectFile extends IProjectFiles {
  ext: string;
}
*/

const projectFiles = [
  {
    name: 'bin',
    type: 'dir',
    description: '',
    children: [
      {
        name: 'index',
        ext: 'js',
        type: 'file',
        description: ''
      }
    ],
  },
  {
    name: 'plugins',
    type: 'dir',
    children: [
      {
        name: 'hbsSetting',
        ext: 'js',
        type: 'file'
      }
    ]
  },
  {
    name: 'server',
    type: 'dir',
    children: [
      {
        name: 'config',
        type: 'dir',
        children: []
      },
      {
        name: 'routes',
        type: 'dir',
        children: []
      },
      {
        name: 'app',
        ext: 'js',
        type: 'file'
      }
    ]
  },
  {
    name: 'web',
    type: 'dir',
    children: [
      {
        name: 'static',
        type: 'dir',
        children: [
          {
            name: 'common',
            type: 'dir',
            children: [
              {
                name: 'assets',
                type: 'dir',
                children: []
              },
              {
                name: 'components',
                type: 'dir'
              },
              {
                name: 'styles',
                type: 'dir',
                children: [
                  {
                    name: 'style',
                    ext: 'css',
                    type: 'file'
                  }
                ]
              }
            ]
          },
          {
            name: 'lib',
            type: 'dir',
            children: []
          },
          {
            name: 'pages',
            type: 'dir',
            children: [
              {
                name: 'home',
                type: 'dir',
                children: [
                  {
                    name: 'home',
                    ext: 'js',
                    type: 'file'
                  },
                  {
                    name: 'home',
                    ext: 'css',
                    type: 'file'
                  }
                ],
              }
            ]
          }
        ]
      },
      {
        name: 'views',
        type: 'dir',
        children: [
          {
            name: 'components',
            type: 'dir',
            children: []
          },
          {
            name: 'layouts',
            type: 'dir',
            children: [
              {
                name: 'layout',
                ext: 'hbs',
                type: 'file'
              }
            ]
          },
          {
            name: 'pages',
            type: 'dir',
            children: [
              {
                name: 'error',
                ext: 'hbs',
                type: 'file'
              },
              {
                name: 'index',
                ext: 'hbs',
                type: 'file'
              }
            ]
          },
          {
            name: 'templates',
            type: 'dir',
            children: []
          }
        ]
      }
    ],
  },
  {
    name: 'src',
    type: 'dir'
  },
  {
    name: '.browserslistrc',
    ext: '',
    type: 'file'
  },
  {
    name: '.editorconfig',
    ext: '',
    type: 'file'
  },
  {
    name: '.gitignore',
    ext: '',
    type: 'file'
  },
  {
    name: 'package.json',
    ext: '.json',
    type: 'file'
  },
  {
    name: 'README',
    ext: 'md',
    type: 'file'
  },
  {
    name: 'server.config',
    ext: 'js',
    type: 'file'
  }
];

module.exports = {
  projectFiles,
};
