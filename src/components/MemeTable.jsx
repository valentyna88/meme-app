import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from '@heroui/table';

const MemeTable = () => {
  const memes = [
    { id: 1, name: 'Distracted Boyfriend', likes: 25 },
    { id: 2, name: 'Mocking SpongeBob', likes: 40 },
  ];

  return (
    <Table aria-label="Memes Table">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Likes</TableColumn>
      </TableHeader>
      <TableBody>
        {memes.map(meme => (
          <TableRow key={meme.id}>
            <TableCell>{meme.id}</TableCell>
            <TableCell>{meme.name}</TableCell>
            <TableCell>{meme.likes}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MemeTable;
