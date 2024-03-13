import { getSnapshot } from 'utils';
import { routes } from 'config';
import { userActions } from 'redux';

import UsersList from './UsersList';

const mockDispatch = jest.fn();
const mockPush = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('UsersList component', () => {
  const usersMock = [
    { name: 'user1', _id: 'user1' },
    { name: 'user2', _id: 'user2' },
  ];
  const eventMock = {
    target: {
      dataset: {
        userId: 'user2',
      },
    },
  };
  const snapshot = getSnapshot(<UsersList users={usersMock} />);

  it('should call dispatch and router push after click', () => {
    const userBtn = snapshot.props.children.find(
      (item) => item.props['data-user-id'] === eventMock.target.dataset.userId
    );
    const currentUser = usersMock.find((user) => user._id === eventMock.target.dataset.userId);

    userBtn.props.onClick(eventMock);
    expect(mockDispatch).toHaveBeenCalledWith(userActions.setUserData(currentUser));
    expect(mockPush).toHaveBeenCalledWith(routes.home);
  });

  it('should match snapshot', () => {
    expect(snapshot).toMatchSnapshot();
  });
});
