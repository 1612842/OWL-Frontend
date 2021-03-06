import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));

const Keyword = React.lazy(() => import('./components/keyword'));
const Facebook = React.lazy(() => import('./components/facebook'));
const FacebookPage = React.lazy(() => import('./components/facebook/page'));
const FacebookPost = React.lazy(() => import('./components/facebook/post'));

const Youtube = React.lazy(() => import('./components/youtube'));
const YoutubeChannel = React.lazy(() => import('./components/youtube/channel'));
const YoutubeTopic = React.lazy(() => import('./components/youtube/topic/index'));
const YoutubeVideo = React.lazy(() => import('./components/youtube/video'));


const KeywordKeyword = React.lazy(() => import('./components/keyword/keyword/index'));
const KeywordVideo = React.lazy(() => import('./components/keyword/video'));


const VideoHighlight = React.lazy(() => import('./components/objectdetection/videohighlight'));
const TaskVideoHighlight = React.lazy(() => import('./components/objectdetection/videohighlight/task'));
const ObjectDetection = React.lazy(() => import('./components/objectdetection/imagedetection'));

const FaceVideoHighlight = React.lazy(() => import('./components/facerecognition/videohighlight'));
const FaceTaskVideoHighlight = React.lazy(() => import('./components/facerecognition/videohighlight/task'));
const FaceObjectDetection = React.lazy(() => import('./components/facerecognition/imagedetection'));

const Enews = React.lazy(() => import('./components/enews/index'));

const RoleManagement = React.lazy(() => import('./components/RoleManagement'));
const NavManagement = React.lazy(() => import('./components/NavManagement'));

const ModelManager = React.lazy(() => import('./components/models'));
const APIManager = React.lazy(() => import('./components/models/apiModel'));


const Configuration = React.lazy(() => import('./components/dnd/configuration'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/e-news', name: 'E-news', component: Enews },

  { path: '/project/keywords',exact:true, name: 'Keywords', component: Keyword },
  { path: '/project/facebook',exact:true, name: 'Facebook', component: Facebook },
  { path: '/project/facebook/page/:id',exact:true, name: 'Facebook page', component: FacebookPage },
  { path: '/project/facebook/:id/:postid',exact:true, name: 'Facebook post', component: FacebookPost },

  { path: '/project/youtube', exact:true, name: 'Youtube', component: Youtube },
  { path: '/project/youtube/channel/:id',exact:true, name: 'Youtube channel', component: YoutubeChannel },
  { path: '/project/youtube/topic/:id',exact:true, name: 'Youtube topic', component: YoutubeTopic },
  { path: '/project/youtube/:id/:videoid',exact:true, name: 'Youtube video', component: YoutubeVideo },


  { path: '/project/keywords/:id',exact:true, name: 'Keyword', component: KeywordKeyword },
  { path: '/project/keywords/:id/:videoid',exact:true, name: 'Keyword video', component: KeywordVideo },

  { path: '/manual/object-detection', exact:true, name: 'Object detection', component: ObjectDetection },
  { path: '/manual/object-detection/video-highlight',exact:true,  name: 'Video highlight', component: VideoHighlight },
  { path: '/manual/object-detection/video-highlight/:taskid',exact:true,  name: 'Task', component: TaskVideoHighlight },
  { path: '/manual/object-detection/image-detection', exact:true, name: 'Object image', component: ObjectDetection },

  { path: '/manual/face-recognition', exact:true, name: 'Face recognition', component: FaceObjectDetection },
  { path: '/manual/face-recognition/video-highlight',exact:true,  name: 'Video highlight', component: FaceVideoHighlight },
  { path: '/manual/face-recognition/video-highlight/:taskid',exact:true,  name: 'Task', component: FaceTaskVideoHighlight },
  { path: '/manual/face-recognition/image-detection', exact:true, name: 'Face image', component: FaceObjectDetection },
 
  { path: '/admin/manager/role-management',exact: true, name: 'Role Management', component: RoleManagement},
  { path: '/admin/manager/nav-management',exact: true, name: 'Nav Management', component: NavManagement},
  { path: '/admin/manager/models',exact: true, name: 'Model manager', component: ModelManager},
  { path: '/admin/manager/api',exact: true, name: 'API manager', component: APIManager},
  { path: '/admin/configuration',exact: true, name: 'Configuration', component: Configuration},

];

export default routes;
