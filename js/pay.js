$(document).ready(function() {
  $(function() {
    $('#elastic_grid_demo').elastic_grid({
      'filterEffect' : '<a href="https://www.jqueryscript.net/tags.php?/popup/">popup</a>', // moveup, scaleup, fallperspective, fly, flip, helix , popup
      'hoverDirection' : true,
      'hoverDelay' : 0,
      'hoverInverse' : false,
      'expandingSpeed' : 500,
      'expandingHeight' : 500,
      

      'items': [{
          'title': 'Title #1',
          'description': 'Description text here',
          'thumbnail': ['images/mowabb.jpg', 'images/mowabb.jpg'],
          'large': ['images/mowabb.jpg', 'images/mowabb.jpg'],
          'img-title': ['images/mowabb.jpg', 'images/mowabb.jpg'],
          'button-list': [{
              'title': 'Demo',
              'url': 'http://bonchen.net/'
            },
            {
              'title': 'Download',
              'url': 'http://porfolio.bonchen.net/'
            }
          ],
          'tags': ['Portrait']

        },
        {
          'title': 'Title #2',
          'description': 'Description text here',
          'thumbnail': ['images/small/4.jpg', 'images/small/5.jpg'],
          'large': ['images/large/4.jpg', 'images/large/5.jpg'],
          'img_title': ['image #1 title', 'image #2 title'],
          'button_list': [{
              'title': 'Demo',
              'url': 'http://bonchen.net/'
            },
            {
              'title': 'Download',
              'url': 'http://porfolio.bonchen.net/'
            }
          ],
          'tags': ['Vintage']
        },

        {
          'title': 'Title #3',
          'description': 'Description text here',
          'thumbnail': ['images/small/15.jpg', 'images/small/2.jpg'],
          'large': ['images/large/15.jpg', 'images/large/2.jpg'],
          'img_title': ['image #1 title', 'image #2 title'],
          'button_list': [{
              'title': 'Demo',
              'url': 'http://bonchen.net/'
            },
            {
              'title': 'Download',
              'url': 'http://porfolio.bonchen.net/'
            }
          ],
          'tags': ['BW']

        }
      ]
    });
  });
});
