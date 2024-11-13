import { FC, useState } from 'react';
import { LayoutGrid, List, Upload, MoreVertical, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';

interface FileItem {
  id: string;
  name: string;
  type: string;
  size: string;
  modified: string;
  shared: string;
}

const Storage: FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - in a real app, this would come from your backend
  const files: FileItem[] = [
    {
      id: '1',
      name: 'Project Presentation.pdf',
      type: 'PDF',
      size: '2.5 MB',
      modified: '2 days ago',
      shared: 'Only me'
    },
    {
      id: '2',
      name: 'Team Photo.jpg',
      type: 'Image',
      size: '3.1 MB',
      modified: '1 week ago',
      shared: 'Team'
    },
    {
      id: '3',
      name: 'Budget Report.xlsx',
      type: 'Spreadsheet',
      size: '1.8 MB',
      modified: '3 days ago',
      shared: 'Department'
    },
    {
      id: '4',
      name: 'Meeting Notes.docx',
      type: 'Document',
      size: '956 KB',
      modified: '1 day ago',
      shared: 'Only me'
    }
  ];

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">My Storage</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white rounded-lg p-1">
            <Toggle
              pressed={viewMode === 'grid'}
              onPressedChange={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <LayoutGrid className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={viewMode === 'list'}
              onPressedChange={() => setViewMode('list')}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </Toggle>
          </div>
          <Button className="bg-primary-500 hover:bg-primary-600">
            <Upload className="h-4 w-4 mr-2" />
            Upload Files
          </Button>
        </div>
      </div>

      <div className="mb-6 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="file-grid">
          {filteredFiles.map((file) => (
            <div key={file.id} className="file-card group">
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-md mb-3 flex items-center justify-center text-gray-400">
                  {file.type === 'Image' ? (
                    <img
                      src="/placeholder.svg"
                      alt={file.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <div className="text-lg">{file.type}</div>
                  )}
                </div>
                <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <h3 className="font-medium truncate">{file.name}</h3>
              <p className="text-sm text-gray-500">{file.size}</p>
            </div>
          ))}
        </div>
      ) : (
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
                  <td className="py-3 px-4">{file.name}</td>
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
      )}
    </div>
  );
};

export default Storage;