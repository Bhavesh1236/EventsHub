import { StyleSheet,Dimensions, Platform } from "react-native";
import { colors, sizes, fonts } from "../../constants/them";
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    // app styles 
    container: { flex:1, alignItems: 'center', },
    appContainer: { flex:1, justifyContent:'center', alignItems: 'center', },

    // images styes 
    imgSet:{ height: Platform.select({ web: '30%', windows: '30%', android: '10%', ios: '10%'}), width:'60%', resizeMode:'contain' },
    imgTop:{ width:375, height:475,resizeMode:'contain',marginTop:20,alignSelf:'center'},
    imgModal:{ borderTopRightRadius: sizes.radius2, borderTopLeftRadius: sizes.radius2, backgroundColor:colors.appBule,position:'absolute',bottom:0,left:0,width:'100%',height:'38%',padding:40 },
    imgApp:{height:50,width:50,resizeMode:'contain',marginBottom:10},
    imgApp2:{height:25,width:25,resizeMode:'contain'},

    // button style 
    btnView:{ left: 40, right: 40, bottom: 49, position: 'absolute',flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
    btnOval:{justifyContent:'space-between',flexDirection:'row',alignItems:'center'},
    btnSign:{paddingTop:20},
    btnPsw:{paddingTop:20,width:'70%'},
    
    // text Styles 
    txtTitle:{...fonts.h2,color:colors.white},
    txtBtn:{...fonts.h3,color:colors.white},
    txtDis:{...fonts.body3,color:colors.lightBlue,opacity:0.8,paddingTop:sizes.padding3},
    bottamLoader:{ bottom:80, position:'absolute', },
    directional1:{width:16,height:16,backgroundColor:colors.darkgray,borderRadius:10,marginLeft:sizes.padding3},
    directional2:{width:10,height:10,backgroundColor:colors.white,borderRadius:10,marginLeft:sizes.padding3},
    appLoginText:{justifyContent:'flex-start', fontSize:28, marginBottom:20},

    // view style 
    AppView1:{paddingTopz:20,alignItems:'center'},
    row:{flexDirection:'row'},

    // shared components
    redio:{ width: 24,height: 24,borderRadius: 12,borderWidth: 2,borderColor: 'black',justifyContent: 'center',alignItems: 'center',marginRight: 8,},
    redioAnimation:{ width: 12,height: 12,borderRadius: 6,backgroundColor: 'black', },
    soucual:{flexDirection:'row',borderRadius:10,paddingVertical: 13, marginVertical: 10,width: '100%',justifyContent:'center',shadowColor: colors.lightGray2,shadowOffset: {width: 0,height: 8,},shadowOpacity: 0.46,shadowRadius: 11.14,elevation: 17,},
    header:{ padding: 16,alignItems: 'center', },
    profileImage: {width: 90,height: 90,borderRadius: 100,marginRight: 12,},
    username: {fontSize: 16,fontWeight: 'bold',marginTop: 20},

    // Home screen
    appHeader:{ backgroundColor:colors.lime, borderBottomLeftRadius: 50, borderBottomRightRadius:50 , height:200, width:'100%', },

    // bottom tab style
    tab:{position: 'absolute',left: 0,bottom: 0,right: 0,height:70,borderTopWidth: 1,elevation: 0, backgroundColor:colors.textColor},
    addEvent:{position: 'relative', bottom: 35,elevation: 0, backgroundColor:colors.textColor},
    icon:{padding:10, backgroundColor: colors.lime,alignItems:'center',borderRadius:100}
});
 
export default styles;