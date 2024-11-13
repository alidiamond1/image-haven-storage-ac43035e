import { FC } from 'react';
import { FileText, Video, Music, Image } from 'lucide-react';

const StorageCard: FC<{ icon: JSX.Element; title: string; files: number; size: string }> = ({
  icon,
  title,
  files,
  size
}) => (
  <div className="bg-primary-50 rounded-lg p-4">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{files} files</p>
      </div>
    </div>
    <div className="text-sm text-gray-500">{size} of 1TB</div>
  </div>
);

const Index: FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Overview storage</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StorageCard
          icon={<Image className="w-6 h-6 text-blue-500" />}
          title="Images"
          files={361}
          size="156GB"
        />
        <StorageCard
          icon={<Video className="w-6 h-6 text-purple-500" />}
          title="Video"
          files={361}
          size="361GB"
        />
        <StorageCard
          icon={<Music className="w-6 h-6 text-green-500" />}
          title="Music"
          files={361}
          size="150GB"
        />
        <StorageCard
          icon={<FileText className="w-6 h-6 text-orange-500" />}
          title="Documents"
          files={361}
          size="361GB"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Suggestions</h2>
        <div className="file-grid">
          {/* Sample files - replace with real data */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="file-card">
              <div className="aspect-video bg-gray-100 rounded-md mb-3"></div>
              <h3 className="font-medium">Sample File {i}</h3>
              <p className="text-sm text-gray-500">2.5 MB</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent files</h2>
        <div className="bg-white rounded-lg shadow-sm">
          <table className="w-full">
            <thead className="text-sm text-gray-500 border-b">
              <tr>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Size</th>
                <th className="text-left py-3 px-4">Modified</th>
                <th className="text-left py-3 px-4">Shared</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="py-3 px-4">Document {i}.pdf</td>
                  <td className="py-3 px-4">2.5 MB</td>
                  <td className="py-3 px-4">2 days ago</td>
                  <td className="py-3 px-4">Only me</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;