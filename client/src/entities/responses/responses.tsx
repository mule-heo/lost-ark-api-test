import * as S from "./style";
import { responses } from "./model";
import { FetchResult } from "./fetch-result";

export const Responses = ({
  data,
  status,
}: {
  data: string;
  status: string;
}) => {
  return (
    <S.DivContainer>
      <S.HeadingRow>
        <S.Heading>Responses</S.Heading>
      </S.HeadingRow>
      <FetchResult data={data} status={status} />
      <S.Table>
        <thead>
          <tr>
            <th>응답 코드</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          {responses.map(response => {
            return (
              <tr key={response.statusCode}>
                <td>
                  <span>{response.statusCode}</span>
                </td>
                <td>
                  <p>{response.description}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </S.Table>
    </S.DivContainer>
  );
};
