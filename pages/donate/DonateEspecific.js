import SectionsTitle from "../../components/ui/SectionsTitle"
import { Box } from "@chakra-ui/react"
import Department from "./Department"

export default function DonateEspecific() {
  const title = 'Donate to specific departments'
  return (
    <section>
      <Box textAlign="center" my="5%">
        <SectionsTitle title={title} />
      </Box>
      <Department name="Women's<br/>Rights" content="Our womens rights department is dedicated to engaging men to lead the fight to eliminate gender-based violence. We are raising awareness of the global problem of Femicide through preserving the memories of victims and making thier stories known. We also aim to inspire and educate women and girls through sharing stories of inspirational women and encouraging interest in learning about financial literacy, politics and STEM subjects. Through these endeavours we will break stereotypes and empower girls to stay in education and achieve great things!" />
      <Department name="Inclusion" content="Our Inclusion department focuses on showcasing diversity in all aspects of life. Through embedding inclusive practices in classrooms from a young age we aim to eliminate stigmas surrounding difference and ensure each persons individuality and uniqueness are celebrated. We are currently creating materials to support people with autism and other intellectual disabilities learn about sexuality and social skills." />
      <Department name="Sexual and<br/>Reproductive<br/>Health" content="Breaking the stigma around discussing sexual and reproductive health is paramount in our work. Dr Diversa opens the dialogue to answer questions that young people may be ashamed to ask but are extremely common. We share information regarding healthy sexual development to help young people understand their own bodies and the changes that happen through puberty and beyond. We are dedicated to ending period poverty to ensure young girls do not miss out on thier education due to lack of basic sanitary products. Our ED Talks series being developed aims to lift the lid on some of these topics by hearing from academics within the SRH field discussing thier areas of expertise." />
      <Department name="Children's<br/>Rights" content="We want children's voices to be heard. We are teaching children about their rights and how to exercise them. We are creating a platform for young people to share content about their rights and to enable them to build their own collective to share ideas and work together to educate, empower and enable children to be change makers in our society. Using art, music and other creative outlets we will help young people to inspire thier peers to get involved in the drive for change and create real positive momentum." />
      <Department name="Legal" content="Our legal department facilitates the sharing of academic articles to ensure that people who may not be able to afford to access journals and other publications have access to important reference materials to use in informing their studies. They also work to showcase law reform around the world relating to the objectives of Educacion Diversa and how it can differ depending on the country and their value of respecting human rights." />
      <Department name="Translators" content="The goal of the translation department is to make resources available to the most people possible by translating them into other languages." />
      <Department name="Sustainability" content="Our sustainability department aims to educate children around the world about SDGs, circular economies and biodiversity to help them to appreciate the world we live in and enable them to make informed decisions to protect their environment." />
      <Department name="Peaceful Conflict<br/>Resolution" content="We advocate for peaceful conflict resolution in the hope of eliminating violence in the world. Starting young, we are educating children about the effects of bullying and the promotion of wellbeing activities to nurture the mental health of our young people. We will also work with adults to help them to set a positive example for young people and create a more harmonious environment for all." />
      <Department name="Art" content="Art is at the centre of Educacion diversa. It is accessible to all, displaying clear universal messages. Art and creativity is also proven to have therapeutic benefits and has a positive impact on the development of the neurological pathways in the brain which supports positive mental wellbeing." />
    </section>
  )
}
