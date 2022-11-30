import Content from "./content";

export default function index(props) {
  return (
    <>
      <div>
        <Content data={props.data} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {

    let data = []

    for (let index = 0; index < 100; index++) {
        data.push({id: index+1, title: 'Por favorzinho', completed: index%2 ? true : false})
    }


  return {
    props: { data }
  };
};
