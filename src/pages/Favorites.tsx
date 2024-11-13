import { FC, useState } from 'react';
import { Search, MoreVertical, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface FavoriteFile {
  id: string;
  name: string;
  type: string;
  size: string;
  modified: string;
  shared: string;
}

const Favorites: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - in a real app, this would come from your backend
  const favoriteFiles: FavoriteFile[] = [
    {
      id: '1',
      name: 'Important Document.pdf',
      type: 'PDF',
      size: '2.5 MB',
      modified: '2 days ago',
      shared: 'Only me'
    },
    {
      id: '2',
      name: 'Project Assets.zip',
      type: 'Archive',
      size: '45 MB',
      modified: '1 week ago',
      shared: 'Team'
    }
  ];

  const filteredFiles = favoriteFiles.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Favorite Files</h1>
      </div>

      <div className="mb-6 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search favorites..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <table className="w-full">
          <thead className="text-sm text-gray-500 border-b">
            <tr>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Size</th>
              <th className="text-left py-3 px-4">Modified</th>
              <th className="text-left py-3 px-4">Shared</th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {filteredFiles.map((file) => (
              <tr key={file.id} className="border-b last:border-0 hover:bg-gray-50 group">
                <td className="py-3 px-4 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  {file.name}
                </td>
                <td className="py-3 px-4">{file.size}</td>
                <td className="py-3 px-4">{file.modified}</td>
                <td className="py-3 px-4">{file.shared}</td>
                <td className="py-3 px-4">
                  <button className="p-1 rounded-full hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favorites;