import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import { useLazySearchUsersQuery } from "../store/gitHub/githubApi";
import Loader from "../components/Loader";
import Input from "../components/Input";
import Container from "../components/Container";
import Card from "../components/Card";

const HomePage = () => {
  const [fetchUsers, { data: users, isLoading }] = useLazySearchUsersQuery();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await fetchUsers(data.search)
      .catch(() => console.error("Something went wrong"))
      .finally(() => reset());
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="py-4 px-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-end">
          <Input
            id="search"
            label="Search by name"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="border rounded-md px-3 py-2 border-black leading-5 ml-2 bg-gray-300"
          >
            Search
          </button>
        </form>
        {users === undefined && (
          <div className="text-lg flex justify-center mt-10">
            Please type anything to find users
          </div>
        )}
        {users?.length === 0 && (
          <div className="text-lg flex justify-center mt-10">
            There is no matches, please try another name
          </div>
        )}
        <Container>
          {users?.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
