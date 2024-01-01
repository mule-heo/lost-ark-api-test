import * as S from "./style";

export const FetchResult = ({ data }: { data: string }) => {
  if (!data) {
    return null;
  }
  return (
    <S.Table>
      <thead>
        <tr>
          <th>데이터</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <pre>{data}</pre>
          </td>
        </tr>
      </tbody>
    </S.Table>
  );
};
