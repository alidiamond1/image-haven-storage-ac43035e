import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, 
  FolderOpen, 
  Clock, 
  Star, 
  Trash2, 
  Users, 
  School,
  Plus
} from 'lucide-react';

const Sidebar: FC = () => {
  const location = useLocation();
  
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <FolderOpen className="w-6 h-6 text-primary-500" />
        <span className="text-xl font-semibold text-gray-900">MyBox</span>
      </div>
      
      <div className="space-y-1">
        <h2 className="text-xs font-semibold text-gray-500 uppercase px-3 mb-2">File manager</h2>
        <Link to="/" className={`sidebar-item ${location.pathname === '/' ? 'active' : ''}`}>
          <LayoutGrid size={18} />
          <span>Overview</span>
        </Link>
        <Link to="/storage" className={`sidebar-item ${location.pathname === '/storage' ? 'active' : ''}`}>
          <FolderOpen size={18} />
          <span>My storage</span>
        </Link>
        <Link to="/recent" className={`sidebar-item ${location.pathname === '/recent' ? 'active' : ''}`}>
          <Clock size={18} />
          <span>Recent files</span>
        </Link>
        <Link to="/favorites" className={`sidebar-item ${location.pathname === '/favorites' ? 'active' : ''}`}>
          <Star size={18} />
          <span>Favorites</span>
        </Link>
        <Link to="/trash" className={`sidebar-item ${location.pathname === '/trash' ? 'active' : ''}`}>
          <Trash2 size={18} />
          <span>Trash bin</span>
        </Link>
      </div>

      <div className="mt-8 space-y-1">
        <h2 className="text-xs font-semibold text-gray-500 uppercase px-3 mb-2">Shared files</h2>
        <Link to="/team" className={`sidebar-item ${location.pathname === '/team' ? 'active' : ''}`}>
          <Users size={18} />
          <span>Team</span>
        </Link>
        <Link to="/school" className={`sidebar-item ${location.pathname === '/school' ? 'active' : ''}`}>
          <School size={18} />
          <span>School</span>
        </Link>
      </div>

      <button className="mt-6 w-full flex items-center gap-2 px-4 py-2 rounded-md bg-primary-200 text-primary-800 hover:bg-primary-300 transition-colors">
        <Plus size={18} />
        <span>Create shared folder</span>
      </button>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Storage</span>
            <span className="text-sm text-gray-600">43% used</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-primary-500 h-2 rounded-full" style={{ width: '43%' }}></div>
          </div>
          <button className="mt-3 w-full text-center text-sm text-primary-600 hover:text-primary-700">
            Upgrade storage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;