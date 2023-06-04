import { StyleSheet,Dimensions } from "react-native";
import { colors, sizes, fonts } from "../../constants/them";
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    // app styles 
    appContainer: { flex:1, justifyContent:'center', alignItems: 'center', },

    // images styes 
    imgSet:{ height: 50, width:'60%', },
    imgTop:{ width:375, height:475, left: 0, top: 49, position: 'absolute'},
    imgModal:{ borderTopRightRadius: sizes.radius2,borderTopLeftRadius: sizes.radius2, backgroundColor:'#5669FF',position:'absolute',bottom:0,left:0,width:'100%',height:288,padding:40 },

    // button style 
    btnView:{ left: 40, right: 40, bottom: 49, position: 'absolute',flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
    btnOval:{justifyContent:'space-between',flexDirection:'row',alignItems:'center'},
    
    // text Styles 
    txtTitle:{...fonts.h2,color:colors.white},
    txtBtn:{...fonts.h3,color:colors.white},
    txtDis:{...fonts.body3,color:colors.lightBlue,opacity:0.8,paddingTop:sizes.padding3},
    bottamLoader:{ bottom:80, position:'absolute', },
    directional1:{width:16,height:16,backgroundColor:colors.darkgray,borderRadius:10,marginLeft:sizes.padding3},
    directional2:{width:10,height:10,backgroundColor:colors.white,borderRadius:10,marginLeft:sizes.padding3}
});
 
export default styles;