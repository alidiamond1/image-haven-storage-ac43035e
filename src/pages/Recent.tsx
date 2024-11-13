import { FC } from 'react';
import { Search, MoreVertical } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface RecentFile {
  id: string;
  name: string;
  type: string;
  size: string;
  modified: string;
  shared: string;
}

const Recent: FC = () => {
  // Sample data - in a real app, this would come from your backend
  const recentFiles: RecentFile[] = [
    {
      id: '1',
      name: 'Weekly Report.pdf',
      type: 'PDF',
      size: '1.2 MB',
      modified: '2 hours ago',
      shared: 'Only me'
    },
    {
      id: '2',
      name: 'Project Screenshots.zip',
      type: 'Archive',
      size: '45 MB',
      modified: '5 hours ago',
      shared: 'Team'
    },
    {
      id: '3',
      name: 'Client Presentation.pptx',
      type: 'Presentation',
      size: '8.5 MB',
      modified: 'Yesterday',
      shared: 'Department'
    },
    {
      id: '4',
      name: 'Meeting Notes.docx',
      type: 'Document',
      size: '256 KB',
      modified: 'Yesterday',
      shared: 'Only me'
    },
    {
      id: '5',
      name: 'Budget 2024.xlsx',
      type: 'Spreadsheet',
      size: '1.8 MB',
      modified: '2 days ago',
      shared: 'Team'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Recent Files</h1>
      </div>

      <div className="mb-6 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search recent files..."
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
            {recentFiles.map((file) => (
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
    </div>
  );
};

export default Recent;