module.exports = {

    title: 'Software Monetization Story',
    description: 'Something about Software Monetization',
    dest: 'public',
    
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
          title: '《软件变现那些事儿》',
          description: '变现是结果，不是目的.'
        },

        '/en/': {
          lang: 'en-US',
          title: 'The Software Monetization Stories!',
          description: 'Something about Software Monetization'
        }
      },

      themeConfig: {
        logo: 'https://bizbetter.coding.net/p/appresource/d/appresource/git/raw/master/images/monetization/monetization.svg',

        locales: {

            '/': {
                lang: 'zh-CN',

                // 多语言下拉菜单的标题
                selectText: '选择语言',

                // 该语言在下拉菜单中的标签
                label: '简体中文',

                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',

                // Service Worker 的配置
                serviceWorker: {
                  updatePopup: {
                    message: "发现新内容可用.",
                    buttonText: "刷新"
                  }
                },

                // 当前 locale 的 algolia docsearch 选项
                algolia: {},

                // 导航菜单
                nav: [
                  { text: '首页', link: '/' },          
                ],

                //侧边栏
                sidebar: [
                  {
                    title: '基本常识',   // 必要的
                    //path: '/introduction/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                      '/introduction/',
                    ]
                  },

                ]

              },  
            

            '/en/': {
                lang: 'en-US', 
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},

                // navigator
                nav: [
                  { text: 'Home', link: '/en/' },          
                ],

                sidebar: [
                  {
                    title: 'INTRODUCTION',   // 必要的
                    //path: '/en/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                      '/en/introduction/',
                    
                    ]
                  },

                ]
            }
            
        }
      }
  };