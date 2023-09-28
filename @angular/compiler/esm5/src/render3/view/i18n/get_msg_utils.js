import { mapLiteral } from '../../../output/map_util';
import * as o from '../../../output/output_ast';
import { serializeIcuNode } from './icu_serializer';
import { i18nMetaToDocStmt } from './meta';
import { formatI18nPlaceholderName } from './util';
/** Closure uses `goog.getMsg(message)` to lookup translations */
var GOOG_GET_MSG = 'goog.getMsg';
export function createGoogleGetMsgStatements(variable, message, closureVar, params) {
    var messageString = serializeI18nMessageForGetMsg(message);
    var args = [o.literal(messageString)];
    if (Object.keys(params).length) {
        args.push(mapLiteral(params, true));
    }
    // /**
    //  * @desc description of message
    //  * @meaning meaning of message
    //  */
    // const MSG_... = goog.getMsg(..);
    // I18N_X = MSG_...;
    var statements = [];
    var jsdocComment = i18nMetaToDocStmt(message);
    if (jsdocComment !== null) {
        statements.push(jsdocComment);
    }
    statements.push(closureVar.set(o.variable(GOOG_GET_MSG).callFn(args)).toConstDecl());
    statements.push(new o.ExpressionStatement(variable.set(closureVar)));
    return statements;
}
/**
 * This visitor walks over i18n tree and generates its string representation, including ICUs and
 * placeholders in `{$placeholder}` (for plain messages) or `{PLACEHOLDER}` (inside ICUs) format.
 */
var GetMsgSerializerVisitor = /** @class */ (function () {
    function GetMsgSerializerVisitor() {
    }
    GetMsgSerializerVisitor.prototype.formatPh = function (value) { return "{$" + formatI18nPlaceholderName(value) + "}"; };
    GetMsgSerializerVisitor.prototype.visitText = function (text) { return text.value; };
    GetMsgSerializerVisitor.prototype.visitContainer = function (container) {
        var _this = this;
        return container.children.map(function (child) { return child.visit(_this); }).join('');
    };
    GetMsgSerializerVisitor.prototype.visitIcu = function (icu) { return serializeIcuNode(icu); };
    GetMsgSerializerVisitor.prototype.visitTagPlaceholder = function (ph) {
        var _this = this;
        return ph.isVoid ?
            this.formatPh(ph.startName) :
            "" + this.formatPh(ph.startName) + ph.children.map(function (child) { return child.visit(_this); }).join('') + this.formatPh(ph.closeName);
    };
    GetMsgSerializerVisitor.prototype.visitPlaceholder = function (ph) { return this.formatPh(ph.name); };
    GetMsgSerializerVisitor.prototype.visitIcuPlaceholder = function (ph, context) {
        return this.formatPh(ph.name);
    };
    return GetMsgSerializerVisitor;
}());
var serializerVisitor = new GetMsgSerializerVisitor();
export function serializeI18nMessageForGetMsg(message) {
    return message.nodes.map(function (node) { return node.visit(serializerVisitor, null); }).join('');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0X21zZ191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3ZpZXcvaTE4bi9nZXRfbXNnX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEtBQUssQ0FBQyxNQUFNLDRCQUE0QixDQUFDO0FBRWhELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUN6QyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFakQsaUVBQWlFO0FBQ2pFLElBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQztBQUVuQyxNQUFNLFVBQVUsNEJBQTRCLENBQ3hDLFFBQXVCLEVBQUUsT0FBcUIsRUFBRSxVQUF5QixFQUN6RSxNQUFzQztJQUN4QyxJQUFNLGFBQWEsR0FBRyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3RCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFpQixDQUFDLENBQUM7SUFDeEQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNyQztJQUVELE1BQU07SUFDTixrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLE1BQU07SUFDTixtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN0QixJQUFNLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7UUFDekIsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUMvQjtJQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDckYsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRSxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBRUQ7OztHQUdHO0FBQ0g7SUFBQTtJQXNCQSxDQUFDO0lBckJTLDBDQUFRLEdBQWhCLFVBQWlCLEtBQWEsSUFBWSxPQUFPLE9BQUsseUJBQXlCLENBQUMsS0FBSyxDQUFDLE1BQUcsQ0FBQyxDQUFDLENBQUM7SUFFNUYsMkNBQVMsR0FBVCxVQUFVLElBQWUsSUFBUyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXRELGdEQUFjLEdBQWQsVUFBZSxTQUF5QjtRQUF4QyxpQkFFQztRQURDLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCwwQ0FBUSxHQUFSLFVBQVMsR0FBYSxJQUFTLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlELHFEQUFtQixHQUFuQixVQUFvQixFQUF1QjtRQUEzQyxpQkFJQztRQUhDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QixLQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUcsQ0FBQztJQUM1SCxDQUFDO0lBRUQsa0RBQWdCLEdBQWhCLFVBQWlCLEVBQW9CLElBQVMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUUscURBQW1CLEdBQW5CLFVBQW9CLEVBQXVCLEVBQUUsT0FBYTtRQUN4RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUFFRCxJQUFNLGlCQUFpQixHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztBQUV4RCxNQUFNLFVBQVUsNkJBQTZCLENBQUMsT0FBcUI7SUFDakUsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi4vLi4vLi4vaTE4bi9pMThuX2FzdCc7XG5pbXBvcnQge21hcExpdGVyYWx9IGZyb20gJy4uLy4uLy4uL291dHB1dC9tYXBfdXRpbCc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uLy4uLy4uL291dHB1dC9vdXRwdXRfYXN0JztcblxuaW1wb3J0IHtzZXJpYWxpemVJY3VOb2RlfSBmcm9tICcuL2ljdV9zZXJpYWxpemVyJztcbmltcG9ydCB7aTE4bk1ldGFUb0RvY1N0bXR9IGZyb20gJy4vbWV0YSc7XG5pbXBvcnQge2Zvcm1hdEkxOG5QbGFjZWhvbGRlck5hbWV9IGZyb20gJy4vdXRpbCc7XG5cbi8qKiBDbG9zdXJlIHVzZXMgYGdvb2cuZ2V0TXNnKG1lc3NhZ2UpYCB0byBsb29rdXAgdHJhbnNsYXRpb25zICovXG5jb25zdCBHT09HX0dFVF9NU0cgPSAnZ29vZy5nZXRNc2cnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR29vZ2xlR2V0TXNnU3RhdGVtZW50cyhcbiAgICB2YXJpYWJsZTogby5SZWFkVmFyRXhwciwgbWVzc2FnZTogaTE4bi5NZXNzYWdlLCBjbG9zdXJlVmFyOiBvLlJlYWRWYXJFeHByLFxuICAgIHBhcmFtczoge1tuYW1lOiBzdHJpbmddOiBvLkV4cHJlc3Npb259KTogby5TdGF0ZW1lbnRbXSB7XG4gIGNvbnN0IG1lc3NhZ2VTdHJpbmcgPSBzZXJpYWxpemVJMThuTWVzc2FnZUZvckdldE1zZyhtZXNzYWdlKTtcbiAgY29uc3QgYXJncyA9IFtvLmxpdGVyYWwobWVzc2FnZVN0cmluZykgYXMgby5FeHByZXNzaW9uXTtcbiAgaWYgKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoKSB7XG4gICAgYXJncy5wdXNoKG1hcExpdGVyYWwocGFyYW1zLCB0cnVlKSk7XG4gIH1cblxuICAvLyAvKipcbiAgLy8gICogQGRlc2MgZGVzY3JpcHRpb24gb2YgbWVzc2FnZVxuICAvLyAgKiBAbWVhbmluZyBtZWFuaW5nIG9mIG1lc3NhZ2VcbiAgLy8gICovXG4gIC8vIGNvbnN0IE1TR18uLi4gPSBnb29nLmdldE1zZyguLik7XG4gIC8vIEkxOE5fWCA9IE1TR18uLi47XG4gIGNvbnN0IHN0YXRlbWVudHMgPSBbXTtcbiAgY29uc3QganNkb2NDb21tZW50ID0gaTE4bk1ldGFUb0RvY1N0bXQobWVzc2FnZSk7XG4gIGlmIChqc2RvY0NvbW1lbnQgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnRzLnB1c2goanNkb2NDb21tZW50KTtcbiAgfVxuICBzdGF0ZW1lbnRzLnB1c2goY2xvc3VyZVZhci5zZXQoby52YXJpYWJsZShHT09HX0dFVF9NU0cpLmNhbGxGbihhcmdzKSkudG9Db25zdERlY2woKSk7XG4gIHN0YXRlbWVudHMucHVzaChuZXcgby5FeHByZXNzaW9uU3RhdGVtZW50KHZhcmlhYmxlLnNldChjbG9zdXJlVmFyKSkpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG4vKipcbiAqIFRoaXMgdmlzaXRvciB3YWxrcyBvdmVyIGkxOG4gdHJlZSBhbmQgZ2VuZXJhdGVzIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24sIGluY2x1ZGluZyBJQ1VzIGFuZFxuICogcGxhY2Vob2xkZXJzIGluIGB7JHBsYWNlaG9sZGVyfWAgKGZvciBwbGFpbiBtZXNzYWdlcykgb3IgYHtQTEFDRUhPTERFUn1gIChpbnNpZGUgSUNVcykgZm9ybWF0LlxuICovXG5jbGFzcyBHZXRNc2dTZXJpYWxpemVyVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHByaXZhdGUgZm9ybWF0UGgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiBgeyQke2Zvcm1hdEkxOG5QbGFjZWhvbGRlck5hbWUodmFsdWUpfX1gOyB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCk6IGFueSB7IHJldHVybiB0ZXh0LnZhbHVlOyB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lcik6IGFueSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcykpLmpvaW4oJycpO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSk6IGFueSB7IHJldHVybiBzZXJpYWxpemVJY3VOb2RlKGljdSk7IH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyKTogYW55IHtcbiAgICByZXR1cm4gcGguaXNWb2lkID9cbiAgICAgICAgdGhpcy5mb3JtYXRQaChwaC5zdGFydE5hbWUpIDpcbiAgICAgICAgYCR7dGhpcy5mb3JtYXRQaChwaC5zdGFydE5hbWUpfSR7cGguY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLnZpc2l0KHRoaXMpKS5qb2luKCcnKX0ke3RoaXMuZm9ybWF0UGgocGguY2xvc2VOYW1lKX1gO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlcik6IGFueSB7IHJldHVybiB0aGlzLmZvcm1hdFBoKHBoLm5hbWUpOyB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0UGgocGgubmFtZSk7XG4gIH1cbn1cblxuY29uc3Qgc2VyaWFsaXplclZpc2l0b3IgPSBuZXcgR2V0TXNnU2VyaWFsaXplclZpc2l0b3IoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUkxOG5NZXNzYWdlRm9yR2V0TXNnKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiBtZXNzYWdlLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQoc2VyaWFsaXplclZpc2l0b3IsIG51bGwpKS5qb2luKCcnKTtcbn1cbiJdfQ==